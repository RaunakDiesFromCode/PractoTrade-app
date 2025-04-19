// hooks/useToggleFavourite.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getUser } from "@/lib/auth";

export const useToggleFavourite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ companyName }: { companyName: string }) => {
      const user = getUser();
      const viewerId = user?.trader_id;

      if (!viewerId) throw new Error("No viewer ID (trader_id) found");

      const res = await axios.post(
        "https://implicit-electra-sagnify-8514ada8.koyeb.app/api/favourites/toggle/",
        {
          viewer_id: viewerId,
          company_name: companyName,
        }
      );

      return res.data;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess: (_data, variables) => {
      // Invalidate or update company list so all consumers get fresh is_fav
      queryClient.invalidateQueries({ queryKey: ["company-list"] });

      // Optionally: also invalidate individual predictions if you store fav state separately
      // queryClient.invalidateQueries(["single-prediction", variables.companyName])
    },
  });
};

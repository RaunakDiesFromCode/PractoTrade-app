"use client";

import React, { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function TnCAlertDialog() {
  const [isOpen, setIsOpen] = useState(false); // Initially closedStore timestamp of last time the dialog was shown

  useEffect(() => {
    const storedTimestamp = localStorage.getItem("lastAlertTimestamp");
    const currentTime = Date.now();

    // If stored timestamp exists and 2 minutes haven't passed, don't show the alert
    if (storedTimestamp) {
      const lastTime = parseInt(storedTimestamp, 10);
      if (currentTime - lastTime < 120000) {
        return; // Exit if less than 2 minutes have passed
      }
    }

    // Show the alert dialog if it's been 2 minutes or more
    setIsOpen(true);

    // Update the last shown timestamp in localStorage
    localStorage.setItem("lastAlertTimestamp", currentTime.toString());
  }, []); // Empty dependency array to run only on initial load

  const handleContinue = () => {
    setIsOpen(false); // Close the alert when the user clicks OK
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Important Notice</AlertDialogTitle>
            <AlertDialogDescription>
            Please be aware that this website may collect data for analytics
            purposes. By continuing, you consent to this data collection. Note
            that the predictions made on this platform are powered by machine
            learning and may not be 100% accurate.
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleContinue}>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

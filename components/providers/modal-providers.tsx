"use client";

import { useEffect, useState } from "react";
import SettingsModel from "../modals/settings-model";
import CoverImageModal from "../modals/cover-image-modal";

const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModel />
      <CoverImageModal />
    </>
  );
};

export default ModalProviders;

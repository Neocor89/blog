"use client";
/* PREVIEW SANITY CLIENT */
import {definePreview} from 'next-sanity/preview';
import {projectId, dataset} from './sanity.client';

// Checking Sanity connexion
function onPublicAccessOnly() {
  throw new Error("Unable to get load preview for public access as you're not logged in!");
}

// Checking Sanity Current Project
if (!projectId || !dataset) {
  throw new Error(
    "Missing ProjectId or Dataset. Check your configuration!"
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
}); 
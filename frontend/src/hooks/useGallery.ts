import { useEffect, useState } from "react";
import type { GalleryPost } from "../types/GalleryPost";
import { galleryService } from "../services/galleryService";

export const useGallery = () => {
  const [posts, setPosts] = useState<GalleryPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await galleryService.getGalleryPosts();

        setPosts(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return {
    posts,
    loading,
  };
};

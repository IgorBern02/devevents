import { useEffect, useState } from "react";
import type { GalleryPost } from "../types/GalleryPost";
import { eventsPastService } from "../services/eventsPastService";

export const useGallery = () => {
  const [posts, setPosts] = useState<GalleryPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await eventsPastService.getEventPastPosts();

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

export const BottomFooter = () => {
  return (
    <div
      className="
          border-t
          border-white/10
          py-6
          text-center
          text-gray-500
          text-sm
        "
    >
      © {new Date().getFullYear()} DevEvents — Desenvolvido por Igor Bernardes.
    </div>
  );
};

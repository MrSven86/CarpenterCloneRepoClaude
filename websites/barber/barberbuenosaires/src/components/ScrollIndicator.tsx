import scrollImg from "@/assets/scroll-for-more.png";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 right-10 lg:right-[156px] z-20 w-[136px] h-[159px] flex items-center justify-center">
      <img
        src={scrollImg}
        alt="Scroll for more"
        className="animate-spin-slow w-full h-full"
      />
    </div>
  );
};

export default ScrollIndicator;

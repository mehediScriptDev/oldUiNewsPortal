import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="md:max-w-7xl flex items-center mx-auto w-11/12 px-6 bg-[#F3F3F3] py-3">
        <button className="btn bg-[#D72050] mr-3 text-white">Latest</button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem enim cum unde quod nihil, nemo amet voluptatum ullam impedit provident perspiciatis perferendis blanditiis ratione eius officia necessitatibus beatae explicabo excepturi?
      </Marquee>
    </div>
  );
};

export default BreakingNews;

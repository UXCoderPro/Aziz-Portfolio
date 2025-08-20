import { gridItems } from "../../Data/index";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const Grid = () => {
  return (
    <section
      id="about"
      className=" pb-1 z-9 bg-blue flex justify-center items-center flex-col relative"
    >
      <BentoGrid className="max-w-7xl py-0 ">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

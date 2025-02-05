import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-white/[0.3]",
        className,
        
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,44,134,1) 35%, rgba(0,212,255,1) 100%)',
      }}
    >
      <div className={`${id === 1} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute">
            {img && (
                <img 
                    src= {img}
                    alt= {img}
                    className = {cn(imgClassName, 'object-center')}
                />
            )}
        </div>
        <div className={`absolute right -0 -bottom-5 ${id === 3 && 'w-full opacity-80'}`}>
                {spareImg && (
                    <img 
                    src= {spareImg}
                    alt= {spareImg}
                    className = {'object-cover, object-center w-full h-full'}
                />
                )}
        </div>

        <div className={cn(
          titleClassName, 'group-hover bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        

        {id === 1 && <GlobeDemo />}

        {id === 2 && (
          <div className=" flex lg:gap-8 absolute -right-0.5 lg:-right-0.5">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['Python','C','Java','SQL','VBA'].map((item)=>(
                <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#101325]">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 lg:gap-8"> 
              {['React.js','Next.js','TypeScript','HTML/CSS'].map((item)=>(
                <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#101325]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}


      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        
        
      </div>
    </div>
    </div>
  );
};

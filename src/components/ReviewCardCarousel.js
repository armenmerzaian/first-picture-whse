import React, {useState} from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewCardCarousel() {
  const [slide, setSlide] = useState(0);

  const reviews = [
    {
      name: "Emily",
      img: "images/profile.png",
      text: "Had a poster framed and it's absolutely stunning, the colour and attention to detail. This was an old document that I hadn't taken care of and Gregory turned it into a beautiful piece.",
    },
    {
      name: "Duane M",
      img: "images/profile.png",
      text: "I have had almost every single one of the pictures in my house framed by Aris and some have been dry mounted. If it can be done and done right, this is the place to have it done. Nothing is too difficult, nothing is impossible.",
    },
    {
      name: "[NAME]",
      img: "images/profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "[NAME2]",
      img: "images/profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "[NAME3]",
      img: "images/profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "[NAME4]",
      img: "images/profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className={slide === 0 ? "" : "hidden"}>
        <div className="hidden laptop:block">
          <div className="flex gap-8 relative">
            <ReviewCard
              msg={reviews[0].text}
              name={reviews[0].name}
              img={reviews[0].img}
            ></ReviewCard>
            <ReviewCard
              msg={reviews[1].text}
              name={reviews[1].name}
              img={reviews[1].img}
            ></ReviewCard>
          </div>
        </div>
        <div className="laptop:hidden flex justify-center">
          <ReviewCard
            msg={reviews[0].text}
            name={reviews[0].name}
            img={reviews[0].img}
          ></ReviewCard>
        </div>
      </div>
      <div className={slide === 1 ? "" : "hidden"}>
        <div className="hidden laptop:block">
          <div className="flex gap-8 relative mb-[52px]">
            <ReviewCard
              msg={reviews[2].text}
              name={reviews[2].name}
              img={reviews[2].img}
            ></ReviewCard>
            <ReviewCard
              msg={reviews[3].text}
              name={reviews[3].name}
              img={reviews[3].img}
            ></ReviewCard>
          </div>
        </div>
        <div className="laptop:hidden flex justify-center">
          <ReviewCard
            msg={reviews[1].text}
            name={reviews[1].name}
            img={reviews[1].img}
          ></ReviewCard>
        </div>
      </div>
      <div className={slide === 2 ? "" : "hidden"}>
        <div className="hidden laptop:block">
          <div className="flex gap-8 relative mb-[52px]">
            <ReviewCard
              msg={reviews[4].text}
              name={reviews[4].name}
              img={reviews[4].img}
            ></ReviewCard>
            <ReviewCard
              msg={reviews[5].text}
              name={reviews[5].name}
              img={reviews[5].img}
            ></ReviewCard>
          </div>
        </div>
        <div className="laptop:hidden flex justify-center">
          <ReviewCard
            msg={reviews[2].text}
            name={reviews[2].name}
            img={reviews[2].img}
          ></ReviewCard>
        </div>
      </div>
      <div className="w-fit mx-auto text-neutral-20 flex items-center gap-0.5 mt-[32px] tablet:mt-[56px]">
        <span
          class={
            slide === 0
              ? "material-icons mr-4 p-2 text-neutral-20"
              : "material-icons cursor-pointer mr-4 p-2 text-neutral-60"
          }
          onClick={
            slide === 0
              ? () => {
                  return;
                }
              : () => setSlide(slide - 1)
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/></svg>
        </span>
        <span
          class={
            slide == 0
              ? "material-icons text-primary-55"
              : "material-icons text-lg cursor-pointer"
          }
          onClick={() => setSlide(0)}
        >
          fiber_manual_record
        </span>
        <span
          class={
            slide == 1
              ? "material-icons text-primary-55"
              : "material-icons text-lg cursor-pointer"
          }
          onClick={() => setSlide(1)}
        >
          fiber_manual_record
        </span>
        <span
          class={
            slide == 2
              ? "material-icons text-primary-55"
              : "material-icons text-lg cursor-pointer"
          }
          onClick={() => setSlide(2)}
        >
          fiber_manual_record
        </span>
        <span
          class={
            slide === 2
              ? "material-icons ml-4 p-2 text-neutral-20"
              : "material-icons cursor-pointer ml-4 p-2 text-neutral-60"
          }
          onClick={
            slide === 2
              ? () => {
                  return;
                }
              : () => setSlide(slide + 1)
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>
        </span>
      </div>
    </div>
  );
}

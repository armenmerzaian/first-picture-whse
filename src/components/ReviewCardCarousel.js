import React, {useState} from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewCardCarousel() {
  const [slide, setSlide] = useState(0);

  const reviews = [
    {
      name: "Marilyn Freedman",
      text: "I have been a customer of The First Picture Frame for over 20 years.  This is a family owned business and the service is excellent. Most of the time I let them pick out the mats and frames for me and it is a collaboration.",
    },
    {
      name: "Greg",
      text: "My framed ads were professionally done and exceeded my expectations. This is the place to frame your personal art or prints. Highly recommended!.",
    },
    {
      name: "Emily",
      text: "Had a poster framed and it's absolutely stunning, the colour and attention to detail. This was an old document that I hadn't taken care of and Gregory turned it into a beautiful piece.",
    },
    {
      name: "Duane M",
      text: "I have had almost every single one of the pictures in my house framed by Aris and some have been dry mounted. If it can be done and done right, this is the place to have it done.",
    },
    {
      name: "Mark",
      text: "Wonderful, personalized service including going that extra mile for their customer.",
    },
    {
      name: "Daniel",
      text: "Been going here for years. Absolute pros!",
    },
  ];

  return (
    <div className="max-w-[1088px] desktop:max-w-[1200px] mx-auto">
      <div className={slide === 0 ? "" : "hidden"}>
        <div className="hidden laptop:block">
          <div className="flex gap-8 relative">
            <ReviewCard
              msg={reviews[0].text}
              name={reviews[0].name}
              img={<ReviewImage character="M" />}
            ></ReviewCard>
            <ReviewCard
              msg={reviews[1].text}
              name={reviews[1].name}
              img={<ReviewImage character="G" />}
            ></ReviewCard>
          </div>
        </div>
        <div className="laptop:hidden flex justify-center">
          <ReviewCard
            msg={reviews[0].text}
            name={reviews[0].name}
            img={<ReviewImage character="M" />}
          ></ReviewCard>
        </div>
      </div>
      <div className={slide === 1 ? "" : "hidden"}>
        <div className="hidden laptop:block">
          <div className="flex gap-8 relative mb-[52px]">
            <ReviewCard
              msg={reviews[2].text}
              name={reviews[2].name}
              img={<ReviewImage character="E" />}
            ></ReviewCard>
            <ReviewCard
              msg={reviews[3].text}
              name={reviews[3].name}
              img={<ReviewImage character="D" />}
            ></ReviewCard>
          </div>
        </div>
        <div className="laptop:hidden flex justify-center">
          <ReviewCard
            msg={reviews[1].text}
            name={reviews[1].name}
            img={<ReviewImage character="G" />}
          ></ReviewCard>
        </div>
      </div>
      <div className={slide === 2 ? "" : "hidden"}>
        <div className="hidden laptop:block">
          <div className="flex gap-8 relative mb-[52px]">
            <ReviewCard
              msg={reviews[4].text}
              name={reviews[4].name}
              img={<ReviewImage character="M" />}
            ></ReviewCard>
            <ReviewCard
              msg={reviews[5].text}
              name={reviews[5].name}
              img={<ReviewImage character="D" />}
            ></ReviewCard>
          </div>
        </div>
        <div className="laptop:hidden flex justify-center">
          <ReviewCard
            msg={reviews[2].text}
            name={reviews[2].name}
            img={<ReviewImage character="E" />}
          ></ReviewCard>
        </div>
      </div>
      <div className="w-fit mx-auto text-neutral-20 flex items-center gap-0.5 mt-[32px] tablet:mt-[56px]">
        <span
          class={
            slide === 0
              ? "mr-4 p-3 text-neutral-20"
              : "cursor-pointer mr-4 p-3 text-neutral-60"
          }
          onClick={
            slide === 0
              ? () => {
                  return;
                }
              : () => setSlide(slide - 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            fill="rgb(153 153 153)"
          >
            <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
          </svg>
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
              ? "material-icons ml-4 p-3 text-neutral-20"
              : "material-icons cursor-pointer ml-4 p-3 text-neutral-60"
          }
          onClick={
            slide === 2
              ? () => {
                  return;
                }
              : () => setSlide(slide + 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            fill="rgb(153 153 153)"
          >
            <path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
          </svg>
        </span>
      </div>
    </div>
  );
}


function ReviewImage({character}) {


  return (
    <div class="!rounded-full p-1 border-2 tablet:p-3 border-primary-75 w-12 h-12 flex justify-center items-center">
      <p class="text-primary-75 font-bold text-lg">{character}</p>
    </div>
  );
}



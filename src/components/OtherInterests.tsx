"use client";

// Framer motion
import { motion } from "framer-motion";

const OtherInterests = () => {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-center gap-y-16">
      <h2 className="pb-8  font-bold">My Other Interests</h2>
      <div className="flex flex-col gap-y-8 px-10 lg:flex-row lg:gap-x-10">
        <motion.div
          className="flex w-full flex-col gap-y-4 rounded-2xl bg-[#DAF7A6]/65 p-6 lg:w-1/3"
          whileHover={{ scale: 1.05, rotate: 0 }}
          initial={{ rotate: -4 }}
          animate={{ rotate: -4 }}
        >
          <h3 className=" font-bold">Dancing</h3>
          <p className="text-xl">
            Dancing was a big part of my life. I used to dance between the ages
            of 8 and 16. I stopped because many people with whom I was dancing
            dropped out and because I didn&apos;t have enough time. This was the
            time when I started high school, so I had much more learning at that
            time, and I also started going to the gym, which I stick to today.
          </p>
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-y-4 rounded-2xl bg-[#DAF7A6]/65 p-6 lg:w-1/3"
          whileHover={{ scale: 1.05, rotate: 0 }}
          initial={{ rotate: 4 }}
          animate={{ rotate: 4 }}
        >
          <h3 className=" font-bold">Acrobatic</h3>
          <p className="text-xl">
            Similarly to dancing, I used to attend acrobatic classes. I dropped
            out at the same time because of a lack of time. I can still probably
            do a frontflip, and my speech isn&apos;t that bad, so I am grateful
            that I had the opportunity to attend these classes.
          </p>
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-y-4 rounded-2xl bg-[#FFC300]/65 p-6 lg:w-1/3"
          whileHover={{ scale: 1.05, rotate: 0 }}
          initial={{ rotate: -7 }}
          animate={{ rotate: -7 }}
        >
          <h3 className=" font-bold">Swimming</h3>
          <p className="text-xl">
            After I dropped dancing and acrobatics, I started swimming. I
            attended swimming classes for 3 years and then dropped out. Not
            because I didn&apos;t have enough time, but because of the price and
            the fact that I can still swim recreationally, which I do.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-y-8 px-10 lg:flex-row lg:gap-x-10">
        <motion.div
          className="flex w-full flex-col gap-y-4 rounded-2xl bg-[#DAF7A6]/65 p-6 lg:w-1/3"
          whileHover={{ scale: 1.05, rotate: 0 }}
          initial={{ rotate: -3 }}
          animate={{ rotate: -3 }}
        >
          <h3 className=" font-bold">Architecture</h3>
          <p className="text-xl">
            Programming and IT paths weren&apos;t my first choice. Actually, I
            really wanted to be an architect. The only problem was that in
            Poland, we don&apos;t have any architecture high schools. Because of
            that, I submitted my application to the IT school, and I really
            loved this path.
          </p>
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-y-4 rounded-2xl bg-[#FFC300]/65 p-6 lg:w-1/3"
          whileHover={{ scale: 1.05, rotate: 0 }}
          initial={{ rotate: -2 }}
          animate={{ rotate: -2 }}
        >
          <h3 className=" font-bold">Guitar</h3>
          <p className="text-xl">
            At the same time, when I was dancing and attending acrobatic
            classes, I also started to play the guitar. I was taking guitar
            lessons for a few years, but my teacher got sick (heart diseases),
            and because of that, he couldn&apos;t teach me any more. At that
            time, I took a break for 3 years. After my break, I came back and
            started learning by myself. I am really grateful that I was able to
            learn guitar by watching YouTube tutorials. I play guitar to this
            day, and I think that I am not that bad at it.
          </p>
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-y-4 rounded-2xl bg-[#ADD8E6]/65 p-6 lg:w-1/3"
          whileHover={{ scale: 1.05, rotate: 0 }}
          initial={{ rotate: 7 }}
          animate={{ rotate: 7 }}
        >
          <h3 className=" font-bold">Video Editing</h3>
          <p className="text-xl">
            First, my contact with IT was video editing. Before high school, I
            wanted to start a YouTube channel, and because of that, I started
            learning how to edit videos. I really enjoyed it, but I am not good
            at it. Because of that, I never really felt progress in my video
            editing skills. I started something new—networking and
            programming—and found out that I am a really good problem solver.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OtherInterests;

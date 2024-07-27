import bigPicture from "/Images/bigPicture.png";

export default function Index() {
  return (
    <div className="bg-gradient-to-t from-[#edf5fd] px-20 pb-5">
      <div className="text-3xl font-bold">AGBAJE ABIODUN KAYODE</div>

      <div className="flex pt-4">
        <div>
          <div>
            <img src={bigPicture} alt="image" />
          </div>
          <div className="pl-4">
            <div>
              I'm a passionate front-end developer driven by the thrill of
              turning ideas into interactive
            </div>

            <div>
              digital experiences. My motivation stems from a belief in the
              power of technology to
            </div>

            <div>
              transform lives. I adhere to high work ethics, emphasizing
              quality, collaboration, and
            </div>

            <div>
              continuous learning. Outside of coding, I enjoy exploring new
              technologies, hiking, and
            </div>

            <div>
              painting. These hobbies fuel my creativity and problem-solving
              skills, ensuring I bring a fresh
            </div>

            <div>perspective to every project.</div>
          </div>
        </div>
        <div className="pl-4 pt-[410px]">
          <div className="text-5xl font-bold">
            <div>FRONT-END</div>
            <div>DEVELOPER</div>
          </div>

          <div className="flex pt-8">
            <div className="pr-3">
              <a
                href="/#Footer"
                className="rounded-md bg-[#1e6cc3] px-3 py-2 font-medium text-white"
              >
                Contact me
              </a>
            </div>

            <div>
              <a
                href="#"
                className="rounded-md bg-black px-3 py-2 font-medium text-white"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

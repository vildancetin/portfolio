import { infos } from "../helpers/aboutinfos";

const About = () => {
  return (
    <div className="text-left m-6 font-poppins">
      <h3 className="text-5xl  mt-4 text-blue font-medium">About Me</h3>
      {infos.map((info) => (
        <article key={info.id} className="pt-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl text-orange animate__animated animate__flash animate__infinite infinite animate__slow 4s"> {info.icon}</span>
            <p className="text-orange text-2xl uppercase font-normal">
              {info.header}
            </p>
          </div>
          <p className="font-medium text-lg">{info.content}</p>
        </article>
      ))}
    </div>
  );
};

export default About;

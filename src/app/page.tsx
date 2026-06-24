import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Home() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:andrewjayasusilo01@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/Andrewjs14',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/andrewjayasusilo/',
    },
  ]

  return (
    <div className="w600:p-[30px] w600:text-lg w400:p-5 w400:text-base p-10 text-xl leading-[1.7]">
      <p>
           Hi, I am <strong>Andrew Jaya Susilo</strong>, a fresh graduate in
      Information Systems with experience in Business Analysis, Data Analysis,
      and Business Intelligence.
      </p>

      <br />

      <p>
            Skilled in Python, SQL, Power BI, Tableau, Excel, and Machine Learning.
      Passionate about transforming data into actionable insights and supporting
      data-driven decision making.
      </p>

      <br />

      <p>
            Previously worked as a Junior IT Business Analyst at PT Computer Sistem
      Indonesia, contributing to data management, business reporting, and
      operational analysis projects across multiple retail branches.
      </p>

      <div className="mr-auto mt-10 flex w-full flex-wrap items-center gap-10">
        {links.map((link, id) => {
          return (
            <a target="_blank" rel="noreferrer" key={id} href={link.href}>
              <link.icon title="" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

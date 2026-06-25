import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Page() {
  const PROJECTS = [
    {
      name: 'Diabetes Prediction System',
      description: 'Random Forest and Streamlit application for diabetes risk prediction using healthcare datasets.',
      techStack: 'Python • Pandas • Scikit-Learn • Random Forest • Streamlit',
      previewImage: '/project1.jpeg',
    },
    {
      name: 'Football Player Position Classification',
      description: 'CNN-based computer vision model for football player position classification from heatmap images.',
      techStack: 'Python • TensorFlow • Keras • CNN • OpenCV',
      previewImage: '/project2.jpeg',
      
    },
    {
      name: 'Business Intelligence Dashboard',
      description: 'Interactive Power BI dashboard for revenue analysis, KPI tracking, and business performance monitoring.',
      techStack: 'Power BI • DAX • Power Query • Excel',
      previewImage: '/project3.jpeg',
     
    },
    {
      name: 'Heart Disease Prediction System',
      description: 'Machine learning application for heart disease risk assessment using clinical patient data.',
      techStack: 'Python • Pandas • Scikit-Learn • Streamlit',
      previewImage: '/project4.jpeg',
    
    },
  ]

  return (
    <>
      {PROJECTS.map((project, id) => {
        return (
          <div
            className="text-foreground bg-bg w600:px-[30px] w400:px-5 border-r-4 border-b-4 border-r-black border-b-black p-8 py-10"
            key={id}
          >
            <div className="w800:w-full mx-auto w-3/4">
              <AspectRatio
                className="rounded-base shadow-shadow -bottom-[2px]! border-2 border-black"
                ratio={2 / 1}
              >
                <img
                  className="rounded-base w-full"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

               <div className="mt-6">
                   <h2 className="w700:text-2xl w450:text-xl text-3xl font-bold">
                       {project.name}
                   </h2>
              
                    <p className="w450:text-base mt-5 text-lg">
                       {project.description}
                     </p>
              
                   <div className="mt-8">
                   <p className="text-sm font-semibold uppercase tracking-wide">
                    Tech Stack
                   </p>
              
                    <p className="mt-2 text-sm opacity-80">
                    {project.techStack}
                     </p>
                   </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

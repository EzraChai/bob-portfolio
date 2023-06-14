import SectionHeader from "@/components/SectionHeader";
import Experience, { ExperienceType } from "@/components/Experience";

export default function ExperiencePage() {
  return (
    <section className="mt-48" id="Exp.">
      <SectionHeader name="Experience" direction="l" />
      <div className="">
        {experiences.map((experience) => (
          <Experience {...experience} />
        ))}
      </div>
    </section>
  );
}

const experiences: ExperienceType[] = [
  {
    company: "Google",
    jobTitle: "Software Engineer",
    description:
      "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
    companyLocation: "Atlanta",
    yearFrom: "2022",
    stack: [
      "Angular",
      "Python",
      "GCP",
      "Git",
      "GitHub",
      "Java",
      "Golang",
      "K8s",
    ],
  },
  {
    company: "Facebook",
    jobTitle: "Software Engineer",
    description:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    companyLocation: "Atlanta",
    yearFrom: "2020",
    yearTill: "2022",
    stack: ["React", "Node", "PHP", "GraphQL", "Presto", "Cassandra"],
  },
  {
    company: "Amazon",
    jobTitle: "Software Engineer",
    description:
      "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
    companyLocation: "Seattle",
    yearFrom: "2016",
    yearTill: "2020",
    stack: [
      "Java",
      "Python",
      "S3",
      "RDS",
      "Redshift",
      "PySpark",
      "HDFS",
      "Apache",
      "Airflow",
    ],
  },
];

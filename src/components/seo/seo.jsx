import { Helmet } from "react-helmet";
import k8icon from "../../assets/images/kubernetes.svg";

export const Seo = ({ title }) => (
  <Helmet>
    <html lang="en" />
    <title>Kubernetes-yaml-generator | {title}</title>
    <link rel="icon" href={k8icon} />
    <meta name="description" content="Tutorial for React Helmet" />
    <meta name="theme-color" content="#E6E6FA" />
  </Helmet>
);

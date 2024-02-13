import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Spline scene="https://prod.spline.design/M7F3Gs5NmY9MaiF4/scene.splinecode" />
      <Spline scene="https://prod.spline.design/mjshCX7ps67S3tlK/scene.splinecode" />
      <Spline scene="https://prod.spline.design/Ew3TGxTM9t90jYG1/scene.splinecode" />
    </main>
  );
}

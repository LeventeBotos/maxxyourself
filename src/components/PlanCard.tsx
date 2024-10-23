export default function PlanCard({ title, description }: any) {
  return (
    <div className="plan-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

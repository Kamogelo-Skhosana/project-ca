export default function ReportPage({ params }: { params: { sessionId: string } }) {
  return <div><h1>Report for {params.sessionId}</h1></div>;
}
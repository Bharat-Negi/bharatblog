export default async function Page({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  return (
    <div>
      <h1>Profile</h1>
      <h5>{id}</h5>
    </div>
  );
}
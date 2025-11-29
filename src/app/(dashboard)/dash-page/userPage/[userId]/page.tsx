export default async function Page({ 
  params 
}: { 
  params: Promise<{ userId: string }> 
}) {
  const { userId } = await params;
  
  return (
    <div>
      <h1>User Profile</h1>
      <h5>{userId}</h5>
    </div>
  );
}
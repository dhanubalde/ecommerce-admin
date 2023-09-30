import prismadb from "@/lib/prismadb";
interface DashboardPageProps {
  params: {
    storeId: string;
  };
};

const DashboardPage: React.FC<DashboardPageProps> = async ({ 
  params
}) => {

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })

  return (
    <div className="p-8 text-sm">
      active: { store?.name}
      <h1 className="text-3xl font-bold">
         Dashboard
      </h1>
    </div>
  );
};

export default DashboardPage;

import { useAppSelector } from "../store/hooks";

const useAccess = () => {
  const { permissions, company } = useAppSelector((state: any) => state.auth);

  return {
    isSuperAdmin: permissions?.roles?.includes("super_admin"),
  };
};

export default useAccess;

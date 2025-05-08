import { useAppDispatch } from "@/Store/ReduxHooks";
import { NavMenuSliceActions } from "@/Store/Slices/NavMenuSlice/NavMenuSlice";

const ExitMenuButton = () => {
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(NavMenuSliceActions.closeMenu());
  };
  return (
    <button
      className="text-whiteColor cursor-pointer"
      onClick={handleCloseModal}
      type="button">
      X
    </button>
  );
};

export default ExitMenuButton;

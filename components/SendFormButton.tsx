import LoadingIcon from "./LoadingIcon";

interface SendFormButtonProps {
  mutation: {
    isPending: boolean;
  };
}

const SendFormButton = ({ mutation }: SendFormButtonProps) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <p className="text-blue-800 dark:text-[#38bdf8] mb-3">
        Aǵza bolıw arqalı siz qupıyalıq siyasatı menen paydalanıw shártlerin
        qabıl etesiz
      </p>
      <button
        type="submit"
        className="w-fit bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors px-2 flex items-center justify-center min-w-[150px]"
        disabled={mutation.isPending}
      >
        {mutation.isPending && <LoadingIcon />}
        {mutation.isPending ? "Arza jiberilip atır" : "Kanalǵa arza jiberiw"}
      </button>
    </div>
  );
};

export default SendFormButton;

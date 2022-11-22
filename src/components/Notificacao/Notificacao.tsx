import { notification } from "antd";

/*

AO CHAMAR MANDAR DE ACORDO COM O EXEMPLO
onNotification('tipo',{
    message: 'Mensagem',
    description: 'Descrição'
})

TIPOS:
success
error
warning
info

*/
type Props = {
  type: string;
  data: {
    message: string;
    description: string;
  };
};
// const onNotification = (props: Props) => {
//   return notification[props.type]({
//     message: props.data.message,
//     description: props.data.description,
//   });
// };

const onNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

export default onNotification;

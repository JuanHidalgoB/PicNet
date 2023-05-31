import io from "socket.io-client";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
//Conexión para escuchar y enviar eventos
const socket = io("https://chatbackend-production-0883.up.railway.app");

export const Chat = () => {
  const [nickname, setNickname] = useState();
  const [disabled, setDisabled] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [storedMessages, setStoredMessages] = useState([]);
  const [firstTime, setfirstTime] = useState(false);

  const url = "https://chatbackend-production-0883.up.railway.app/api/";

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setNickname(currentUser.nickname);
    }

    const receivedMessage = (message) => {
      //console.log(message)
      setMessages([message, ...messages]);
    };
    socket.on("message", receivedMessage);

    //Desuscribimos el estado del componente cuando ya no es necesario utilizarlo
    return () => {
      socket.off("message", receivedMessage);
    };
  }, [messages]);

  //Cargamos los mensajes guardados en la BDD la primera vez
  if (!firstTime) {
    axios.get(url + "messages").then((res) => {
      setStoredMessages(res.data.messages);
    });
    setfirstTime(true);
  }

  const handlerSubmit = (e) => {
    //Evitamos recargar la página
    e.preventDefault();

    //Enviamos el mensaje sólo si se ha establecido un nickname
    if (nickname !== "") {
      //console.log(message)
      //Enviamos el mensaje al servidor
      socket.emit("message", message, nickname);

      //Nuestro mensaje
      const newMessage = {
        body: message,
        from: "Yo",
      };
      //Añadimos el mensaje y el resto de mensajes enviados
      setMessages([newMessage, ...messages]);
      //Limpiamos el mensaje
      setMessage("");

      //Petición http por POST para guardar el artículo:
      axios.post(url + "save", {
        message: message,
        from: nickname,
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="App">
        <div className="container mt-3">
          <div className="card shadow border-0">
            <div className="card-body">
              <h5 className="text-center mb-3">CHAT</h5>

              {/* chat form */}

              <form onSubmit={handlerSubmit}>
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Mensaje..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                  <button
                    className="bg-rosa-100 hover:bg-rosa-200 rounded text-white py-2 px-4 ml-3"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* chat messages */}

          <div className="card mt-3 mb-3 shadow border-0" id="content-chat">
            <div className="card-body">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex p-3 ${
                    message.from === "Yo" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`card mb-3 shadow border-1 ${
                      message.from === "Yo"
                        ? "bg-green-500 bg-opacity-25"
                        : "bg-gray-100"
                    }`}
                  >
                    <div className="card-body">
                      <small className="">
                        {message.from}: {message.body}
                      </small>
                    </div>
                  </div>
                </div>
              ))}

              {/* chat stored messages */}
              <small className="text-center text-gray-500">
                ... Mensajes guardados ...
              </small>
              {storedMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex p-3 ${
                    message.from === nickname ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`card mb-3 shadow border-1 ${
                      message.from === nickname
                        ? "bg-green-500 bg-opacity-25"
                        : "bg-gray-100"
                    }`}
                  >
                    <div className="card-body">
                      <small className="text-gray-500">
                        {message.from}: {message.message}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

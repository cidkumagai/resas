import './Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <div className="loading_anime" />
      <p className='loading_text'>通信中...しばらくお待ちください</p>
    </div>
  );
};

export default Loading;

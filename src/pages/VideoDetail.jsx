import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import ReactPlayer from "react-player";
import { SlDislike, SlLike, SlActionRedo } from "react-icons/sl";
import { RxPinBottom } from "react-icons/rx";
import millify from "millify";
import StringArea from "../components/StringArea";
import VideoCard from "./../components/VideoCard";
import Loader from "./../components/Loader";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  // 1. arama parametresine erişim için kurulum
  const [searchParams] = useSearchParams();

  // 2. url'den v isimli arama paramatresini al
  const id = searchParams.get("v");

  // 3. id'si bilinen videonun bilgilerini api'den al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, []);

  return (
    <div className="datail-page h-screen overflow-auto p-5">
      {/*video içeriği*/}
      <div>
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          height={"50vh"}
          light
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        {!video ? (
          <p>yükleniyor...</p>
        ) : (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <div className="flex justify-between ">
              {/*kanal adı ve resmi */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                />

                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-black rounded-full text-white px-4 h-9 w-ful transition hover:bg-gray-700">
                  Abone ol
                </button>
              </div>
              {/*tarihi ve takip sayısı */}
              <div className="flex items-center gap-4 mx-7 ">
                <div className="flex items-center h-9 bg-[#d6d5d5]  rounded-full cursor-pointer ">
                  <div className="flex items-center h-full gap-4 py-2 px-5 rounded-l-full border border-r-gray-400 hover:bg-gray-200 ">
                    <SlLike />
                  </div>
                  <div className="flex items-center  rounded-r-full h-full py-2 px-5 hover:bg-gray-200 ">
                    <SlDislike />
                  </div>
                </div>
                <div className="flex items-center h-9 bg-[#d6d5d5]  rounded-full cursor-pointer">
                  <p className="flex items-center h-full gap-1 py-2 px-2 font-bold hover:bg-gray-200 rounded-full">
                    <SlActionRedo className="h-9 w-6" /> Paylaş
                  </p>
                </div>
                <div className="flex items-center h-9 bg-[#d6d5d5]  rounded-full cursor-pointer ">
                  <p className="flex items-center h-full gap-1 py-2 px-2 font-bold hover:bg-gray-200 rounded-full">
                    <RxPinBottom className="h-9 w-6" /> İndir
                  </p>
                </div>
              </div>
            </div>
            {/* video açıklama ve detayları */}
            <div className="bg-[#ece9e9] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-5">
                <p>{millify(video.viewCount)} Görüntüleme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
          </>
        )}
      </div>

      {/*alakalı içerikler*/}
      <div className="flex flex-col gap-5 px-7">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard video={item} isRow={true} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;

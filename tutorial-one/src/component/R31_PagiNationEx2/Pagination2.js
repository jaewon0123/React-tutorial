import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const pagination = () => {
  //    정보들 페이지번호를 클릭할 때 들어갈 사진들
  const [photos, setPhotos] = useState([]);
  //     현재페이지(맨처음 1번 페이지 설정) 새로 누른 페이지 = 현재페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 한 페이지당 8개씩 정보를 보겠다 설정
  const photosPerPage = 8;

  useEffect(() => {
    axios
      .get("")// DB 구장, 참가자 정보 불러 올 것
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((error) => {
        console.error("정보를 불러오는데 실패했습니다.", error);
      });
  }, []);

  // 페이지마다 처음가져오는 앨범 마지막에가져오는앨범 어디서부터어디까지 가져올 것인지 설정
  const lastPhoto = currentPage * photosPerPage; //현재페이지 * 한페이지당 보여줄 사진 개수
  const firstPhoto = lastPhoto - photosPerPage;
  const currentPhotos = photos.slice(firstPhoto, lastPhoto);

  // 페이지 변경 처리
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>사진첩</h1>
      {currentPhotos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} />
        </div>
      ))}
      <Pagination
        itemPerPage={photosPerPage}
        totalItems={photos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default pagination;
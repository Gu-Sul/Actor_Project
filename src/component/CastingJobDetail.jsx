import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledButton } from "./StyledButton";

export const CastingJobDetail = () => {
  const { contentId } = useParams();
  const [castDetail, setCastDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCastData = async () => {
      try {
        const response = await axios.get("/mockup_data/castPosting.JSON");
        const data = response.data;
        console.log(response.data);
        const detail = data.find(
          (item) => item.content_id === parseInt(contentId)
        );
        if (!detail) {
          throw new Error("서버에서 정보를 찾을 수 없습니다.");
        }
        setCastDetail(detail);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadCastData();
  }, [contentId]);
  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;
  return (
    <div>
      <div>
        <StyledButton label={"진행 중"} />

        <h1>{castDetail.title}</h1>
      </div>
    </div>
  );
};

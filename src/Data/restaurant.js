import makeStar from "../Components/MakeStar"

export const restaurant = [
    {
        name : "우진해장국",
        longitude : 33.5108509899879,
        latitude : 126.5209117268871,
        address : "제주특별자치도 제주시 서사로 11",
        image : "../images/우진해장국.png",
        kakao_map : "https://place.map.kakao.com/11547525",
        keyword : ["해장국", "고사리해장국"],
        like : 27,
        star : makeStar(5.0),
        explanation : "백종원도 인정한 최고의 해장국 집! 서귀포 바다를 바라보며 먹는 오션뷰 대형 맛집"
    },
    {
        name : "미영이네식당",
        longitude : 33.2162160961085,
        latitude : 126.25181555968082,
        address : "제주특별자치도 서귀포시 대정읍 하모항구로 42 (우)63506",
        image : "../images/미영이네식당.png",
        kakao_map : "https://place.map.kakao.com/9006988",
        keyword : ["회", "고등어회"],
        like : 18,
        star : makeStar(4.0),
        explanation : "바다 냄새가 혀 안에서 감돈다. 진정한 제주 맛집을 알고 싶다면 바로 여기"
    },
    {
        name : "아줄레주",
        longitude : 33.36683593131745,
        latitude : 126.83928908564187,
        address : "제주특별자치도 서귀포시 성산읍 신풍하동로19번길 59 나동 (우)63636",
        image : "../images/아줄레주.png",
        kakao_map : "https://place.map.kakao.com/2003360746",
        keyword : ["카페", "에그타르트"],
        like : 5,
        star : makeStar(0.0),
        explanation : "..."
    }
]
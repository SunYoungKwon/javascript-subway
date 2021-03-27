import colorOptions from "../utils/mock.js";
import Modal from "./common/Modal.js";

const subwayLineColorOptionTemplate = (color, index) => {
  const hasNewLine = (index + 1) % 7 === 0;
  return `<button type="button" class="color-option bg-${color}"></button> ${
    hasNewLine ? "<br/>" : ""
  }`;
};

export default class LinesModal extends Modal {
  constructor() {
    super();
    this.initContent();
  }

  initContent() {
    const template = `
      <div>
        <header>
          <h2 class="text-center">🛤️ 노선 추가</h2>
        </header>
        <form>
          <div class="input-control">
            <label for="subway-line-name" class="input-label" hidden
              >노선 이름</label
            >
            <input
              type="text"
              id="subway-line-name"
              name="subway-line-name"
              class="input-field"
              placeholder="노선 이름"
              required
            />
          </div>
          <div class="d-flex items-center input-control">
              <label for="up-station" class="input-label" hidden>상행역</label>
              <select id="up-station" class="mr-2">
                <option value="" selected disabled hidden>상행역</option>
                <option>사당</option>
                <option>방배</option>
                <option>서초</option>
              </select>
              <label for="down-station" class="input-label" hidden>하행역</label>
              <select id="down-station">
                <option value="" selected disabled hidden>하행역</option>
                <option>사당</option>
                <option>방배</option>
                <option>서초</option>
              </select>
            </div>
            <div class="input-control">
              <label for="distance" class="input-label" hidden>상행 하행역 거리</label>
              <input
                type="number"
                id="distance"
                name="distance"
                class="input-field mr-2"
                placeholder="상행 하행역 거리"
                required
              />
              <label for="duration" class="input-label" hidden>상행 하행역 시간</label>
              <input
                type="number"
                id="duration"
                name="arrival"
                class="input-field"
                placeholder="상행 하행역 시간"
                required
              />
            </div>
          <div class="input-control">
            <div>
              <label for="subway-line-color" class="input-label" hidden>색상 선택</label>
              <input
                type="text"
                id="subway-line-color"
                name="subway-line-color"
                class="input-field"
                placeholder="색상을 아래에서 선택해주세요."
                disabled
                required
              />
            </div>
          </div>
          <div class="subway-line-color-selector px-2">
            ${colorOptions.map(subwayLineColorOptionTemplate).join("")}
          </div>
          <div class="d-flex justify-end mt-3">
            <button
              type="submit"
              name="submit"
              class="input-submit bg-cyan-300 w-100"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    `;

    super.initContent(template);
    this.attachEvent();
  }

  attachEvent() {
    super.attachEvent();
  }

  render() {
    super.render();
  }
}

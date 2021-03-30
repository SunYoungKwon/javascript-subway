import Modal from "./common/Modal.js";

export default class SectionsModal extends Modal {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.initContent();
  }

  initContent() {
    const template = `
      <div>
        <header>
          <h2 class="text-center">🔁 구간 추가</h2>
        </header>
        <form>
          <div class="input-control">
            <select>
              <option>1호선</option>
              <option>2호선</option>
              <option>3호선</option>
              <option>4호선</option>
            </select>
          </div>
          <div class="d-flex items-center input-control">
            <select class="js-prev-station">
              <option value="" selected disabled hidden>이전역</option>
              <option>사당</option>
              <option>방배</option>
              <option>서초</option>
            </select>
            <div class="d-inline-block mx-3 text-2xl">➡️</div>
            <select class="js-next-station">
              <option value="" selected disabled hidden>다음역</option>
              <option>사당</option>
              <option>방배</option>
              <option>서초</option>
            </select>
          </div>
          <div class="input-control">
            <label for="distance" class="input-label" hidden>거리</label>
            <input
              type="number"
              id="distance"
              name="distance"
              class="input-field mr-2"
              placeholder="이전역과 다음역 사이의 거리"
              min="1"
            />
            <label for="duration" class="input-label" hidden>시간</label>
            <input
              type="number"
              id="duration"
              name="arrival"
              class="input-field"
              placeholder="이전역과 다음역 사이의 시간"
              min="1"
            />
          </div>
          <p class="js-section-modal-error-message text-base text-red text-center"></p>
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

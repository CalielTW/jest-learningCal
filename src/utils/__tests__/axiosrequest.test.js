import moxios from "moxios";
import axios from "axios";

jest.useRealTimers();
let axiosInstance;

describe("fetchTodos", () => {
  describe("when API call is successful", () => {
    beforeEach(function () {
      axiosInstance = axios.create();
      moxios.install(axiosInstance);
    });

    afterEach(function () {
      moxios.uninstall(axiosInstance);
    });

    it("axios", async (done) => {
      const todos = [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
      ];

      moxios.stubRequest("https://jsonplaceholder.typicode.com/todos", {
        status: 200,
        data: todos,
      });

      const res = await axiosInstance.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      expect(res.data).toEqual(todos);

      it("should return todos list", async (done) => {
        moxios.wait(function () {
          let request = moxios.requests.mostRecent();
          request
            .respondWith({
              status: 200,
              response: {
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false,
              },
            })
            .then(function () {
              done();
            });
        });
      });
    });
  });
});

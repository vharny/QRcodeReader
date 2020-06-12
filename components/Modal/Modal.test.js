import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import Modal from "./Modal";

describe("Testing Loading Spinner", () => {
  test("Show modal with different content", async () => {
    const { getByTestId, getByText, baseElement } = render(
      <Modal
        {...{
          toggle: () => {
            return;
          },
          modal: {
            type: "promotion",
            isVisible: false,
            data:
              {
                product: {
                  id: 1,
                  libelle: "SkateBoard",
                  url: "https://www.gifi.fr/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/5/4/549274.jpg",
                  description: "petit skateboard des familles"
                }
              }
          }

        }}
      />
    );

    const button = getByText(" Go Back");
    fireEvent.press(button);

    expect(getByTestId("promotion").props.children.length).toBe(2);
    expect(baseElement).toMatchSnapshot();
  });
});

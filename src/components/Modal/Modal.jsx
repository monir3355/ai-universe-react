import { list } from "postcss";
import React from "react";

const Modal = ({data}) => {
  const { features, image_link, description, integrations, accuracy, pricing, input_output_examples } = data;
  const acc = (accuracy && accuracy.score);
  const accPer = acc * 100;
  // pricing.map(singlePrice =>console.log(singlePrice))
  // console.log(Object.values(features || {}));
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-3">
              <h4 className="text-xl font-semibold">{description}</h4>
              <div className="flex justify-between">
                {
                  pricing && pricing.map(pri => <p className=" bg-slate-200 md:p-6 p-2 m-3 rounded-lg md:font-bold">{pri.price && pri.price ? pri.price : "Free"} {pri.plan && pri.plan ? pri.plan : "Free"}</p>)
                }
              </div>
              <div className="flex justify-between my-2">
                <div>
                  <h3 className="font-bold text-xl">Features</h3>
                  {
                    features && Object.values(features || {}).map(value => <li>{value.feature_name ? value.feature_name : "data no found"}</li>)
                  }
                </div>
                <div>
                  <h3 className="font-bold text-xl">Integrations</h3>
                  {
                    integrations && integrations.map(value => <li>{value ? value : "data no found"}</li>)
                  }
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="relative">
              <div className="absolute py-2 px-6 bg-red-600 font-bold text-white rounded-lg right-2 top-2">{accPer}% accuracy</div>
                <img className="w-full h-64" src={image_link ? image_link[0] : "No Images Found"} alt="" />
              </div>
              {
                input_output_examples && input_output_examples.map(ques=> <h3 className="text-xl font-bold">{ques.input}</h3>)
              }
              {
                input_output_examples && input_output_examples.map(ques=> <p>{ques.output}</p>)
              }
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

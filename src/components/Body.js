import React, { useState } from "react";
import carbon2 from "../assets/carbon2.png";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const Body = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="body">
      <div className="index">
        <div className="idx">
          <div className="idx1">-Prerequesites</div>
          <div className="idx2">-Creating the application</div>
        </div>
      </div>
      <div className="content">
        <p>
          For any deep learning project, the end goal is to create a system
          which can be easily used for inference. A simple solution can be to
          create an application that takes an input and gives out the output
          without any further guidance from the user. The application could be a
          Python or C++ deployed application, or a web application hosted on a
          server. Web Deployments are computationally costly and require a
          constant connection to the internet for the application to work,
          making it unreliable and costly. Desktop applications like Python or
          C++ deployments are much more easier, and can be structured to run on
          any desktop machine. In this tutorial we shall focus upon Deploying
          PyTorch based applications using C++.
        </p>
        <h2>Pre-requisites</h2>
        <p>
          A major pre-requisite for the project is having OpenCV installed in
          the application’s root directory, this OpenCV installation library
          shall be required during the CMake installation of our application. To
          know more about how to install OpenCV C++ please follow the blog post
          given here. The next step is to get PyTorch’s library for C++, or
          LibTorch as it is called officially. You can download the library’s
          zip file from here. Once you have the zip file downloaded on your
          application’s root folder, the next step is to extract the folder. The
          path of these files shall be provided to the CMakeList.txt file we
          create at the end of the tutorial.
        </p>
        <h2>Creating the Application</h2>
        <p>
          Once the pre-requisites are completed, the only remaining step is to
          create the main file that contains the source code for our application
          and the header files we will create to load the images into PyTorch
          format dataset, we shall call these file as main.cpp, dataset.h, and
          load_from_folder.h and they will be placed in the src folder. The
          directory structure of the applications root folder is shown in Fig.
          1.
        </p>
        <p>
          In the folder_reader.h file we will add a function that returns a
          vector of strings which contain the paths of the test files. We use
          the filesystem library to iterate over the files inside a directory.
          The function given blow reads the files in a directory and stores them
          in a vector of strings:
        </p>
        <img src={carbon2} alt="code-img" className="code-img" />{" "}
        <p>
          For a better understanding, all the source files will be uploaded in a
          GitHub repository to replicate the project easily, the repository can
          be found here. The next step is to use this iterator function to
          create a PyTorch style dataset, this dataset can be then fed into a
          Dataloader to return batches of image tensors we can use for
          inference. We can declare the dataset using the class definition given
          below:
        </p>
        <p>
          The above function creates a dataset class which loads inference
          images as OpenCV image files, resizes them into a size of 224 pixels
          by 224 pixels, and then performs the min max normalization. We then
          convert this image into PyTorch tensors and then rearrange the tensor
          array to channel first. Now that we have our dataset class ready we
          can start the inference using Libtorch library.
        </p>
      </div>
      <div className="side-links">
        <div className="sd-l">
          <a className="side-link1">
            <BsTwitter></BsTwitter>
          </a>
          <a className="side-link2">
            <BsLinkedin></BsLinkedin>
          </a>
          <a className="side-link3">
            <BsFacebook></BsFacebook>
          </a>
          <a className="side-link4">
            <BsInstagram></BsInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;

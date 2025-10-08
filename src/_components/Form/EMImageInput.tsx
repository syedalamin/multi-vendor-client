/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, CardMedia, Tooltip } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";

type EMImageProps = {
  name: string;
  removeFieldName: string;
  images?: any;
};

const EMImageInput = ({ name, removeFieldName, images = [] }: EMImageProps) => {
  const { control, setValue } = useFormContext();
  const [removedImages, setRemovedImages] = useState<any[]>([]);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={images}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <Box
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
              flexWrap: "wrap",
            }}
          >
            {field.value.map((img: any, index: number) => {
              const src =
                typeof img === "string" ? img : URL.createObjectURL(img);
              return (
                <Tooltip key={index} title="Remove Image" placement="top">
                  <CardMedia
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      cursor: "pointer",
                      border: "2px solid transparent",
                      "&:hover": { border: "2px solid red", opacity: 0.8 },
                      position: "relative",
                    }}
                    component="img"
                    alt={`image-${index}`}
                    image={src}
                    onClick={() => {
                      const removedImage = field.value[index];

                      const remainingImages = field.value.filter(
                        (_: any, i: number) => i !== index
                      );
                      field.onChange(remainingImages);

                      const newRemoved = [...removedImages, removedImage];
                      setRemovedImages(newRemoved);
                      setValue(removeFieldName, newRemoved);

                    
                    }}
                  />
                </Tooltip>
              );
            })}
          </Box>

          {error?.message && <p style={{ color: "red" }}>{error.message}</p>}
        </Box>
      )}
    />
  );
};

export default EMImageInput;

// import { Box, CardMedia, Tooltip } from "@mui/material";
// import { Controller, useFormContext } from "react-hook-form";

// type EMImageProps = {
//   name: string;
//   images?: any;
// };

// const EMImageInput = ({ name, images = [] }: EMImageProps) => {
//   const { control } = useFormContext();

//   return (
//     <Controller
//       control={control}
//       name={name}
//       defaultValue={images}
//       render={({ field, fieldState: { error } }) => (
//         <Box>
//           <Box
//             style={{
//               display: "flex",
//               gap: "10px",
//               marginTop: "10px",
//               flexWrap: "wrap",
//             }}
//           >
//             {field.value.map((img: any, index: number) => {
//               const src =
//                 typeof img === "string" ? img : URL.createObjectURL(img);
//               return (
//                 <Tooltip key={index} title="Remove Image" placement="top">
//                   <CardMedia
//                     sx={{
//                       width: 50,
//                       height: 50,
//                       borderRadius: 2,
//                       cursor: "pointer",
//                       border: "2px solid transparent",
//                       "&:hover": { border: "2px solid red", opacity: 0.8 },
//                       position: "relative",
//                     }}
//                     component="img"
//                     alt={`image-${index}`}
//                     image={src}
//                     onClick={() => {
//                       const removedImage = field.value[index];
//                       const newImages = field.value.filter(
//                         (_: any, i: number) => i !== index
//                       );

//                       field.onChange(newImages);

//                       console.log("Removed image:", removedImage);

//                     }}
//                   />
//                 </Tooltip>
//               );
//             })}
//           </Box>

//           {error?.message && <p style={{ color: "red" }}>{error.message}</p>}
//         </Box>
//       )}
//     />
//   );
// };

// export default EMImageInput;

// _________

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Box, CardMedia } from "@mui/material";
// import { Controller, useFormContext } from "react-hook-form";

// type EMImageProps = {
//   name: string;
//   images?: any;
// };

// const EMImageInput = ({ name, images = [] }: EMImageProps) => {
//   const { control } = useFormContext();

//   return (
//     <Controller
//       control={control}
//       name={name}
//       defaultValue={images}
//       render={({ field, fieldState: { error } }) => (
//         <Box>
//           {/*
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={(e) => {
//               const files = e.target.files ? Array.from(e.target.files) : [];
//               field.onChange([...field.value, ...files]);
//             }}
//           /> */}

//           <Box
//             style={{
//               display: "flex",
//               gap: "10px",
//               marginTop: "10px",
//               flexWrap: "wrap",
//             }}
//           >
//             {field.value.map((img: any, index: number) => {
//               const src =
//                 typeof img === "string" ? img : URL.createObjectURL(img);
//               return (
//                 <CardMedia
//                   sx={{ width: 50, height: 50, borderRadius: 2 }}
//                   key={index}
//                   component="img"
//                   alt={"row.name"}
//                   image={src}
//                 />
//               );
//             })}
//           </Box>

//           {error?.message && <p style={{ color: "red" }}>{error.message}</p>}
//         </Box>
//       )}
//     />
//   );
// };

// export default EMImageInput;

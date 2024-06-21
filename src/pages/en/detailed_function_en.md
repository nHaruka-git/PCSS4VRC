## Feature Details

PCSS (Percentage Closer Soft Shadows), a mechanism that changes the softness of shadows according to distance, has been customized for use with VRChat. <br/>This allows high-resolution shadows to be cast in real-time with relatively low load, and shadows on various parts of the body, such as the forelocks, chin, and chest, can express an overwhelming sense of three-dimensionality and presence. 

As an implementation of PCSS, the Unity asset Next-Gen Soft-Shadows https://assetstore.unity.com/packages/vfx/shaders/next-gen-soft-shadows-137380?locale=ja-JP <br/>or shaders created with reference to the following OSS. https://github.com/TheMasonX/UnityPCSS 

- Build a custom shader from lilToon for PCSS into your avatar. 

- The above shader is set to be less affected by the world lights and more dominated by the spotlight set up on the avatar.
- As mentioned above, the setup tool incorporates a spotlight into the avatar.
- The spotlight is aimed to focus on the Head.
- The direction of the spotlight can be controlled with PhysBone.
- The intensity of the light can be controlled from the ExpressionMenu.
- The softness and density of the shadows, the influence of the world light can be adjusted, and masks can be set in the "Custom Properties" of the material.
- Some avatars have shadows on the whites of their eyes, but by using the mask function, you can mask the areas where you do not want shadows cast.
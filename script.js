var tl = gsap.timeline({
    repeat: -1
});
tl
.to(".imagecontainer",{
        ease:Expo.easeInOut,
        width:"100%",
        stagger: 2
},'a')

.to(".text h1",{
    ease:Expo.easeInOut,
    stagger: 2,
    top: 0
},'a')

.to(".text h1",{
    delay: 2,
    ease:Expo.easeInOut,
    stagger: 2,
    top: "-100%"    
},'a')

.to(".about h4",{
    ease:Expo.easeInOut,
    stagger: 2,
    top: 0
},'a')

.to(".about h4",{
    delay: 2,
    ease:Expo.easeInOut,
    stagger: 2,
    top: "-100%"    
},'a')





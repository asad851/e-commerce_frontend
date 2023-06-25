import React from "react";
import { useNavigate } from "react-router-dom";

function ByBrands() {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate(`Collection/Brand/${e.target.nextSibling.innerHTML}`);
  }
  return (
    <div className="my-16 flex flex-col items-center h-full  md:px-20">
      <h1 className="font-semibold md:text-3xl text-2xl">
        Products by Brands
      </h1>

      <div className="flex gap-2 md:gap-[50px] md:flex-wrap md:justify-center  w-full h-full box-border  py-8 overflow-x-auto overflow-y-hidden whitespace-nowrap md:overflow-hidden scroll-smooth -mx-[20px]  items-center max-md:px-2">
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="https://assets.ajio.com/medias/sys_master/root/20230602/PX12/64792d1842f9e729d70b8fde/-473Wx593H-461378045-multi-MODEL.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            T-Shirts
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer   shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/04/8118_Image-1600w-X-2398h-B.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Casual Shirts
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer   shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010598185-Grey-Grey-1000010598185-10282021_01-1200.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Suits
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer  shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="https://www.fashionbeans.com/wp-content/uploads/2022/10/closedofficial.men_RedStripes_BestSweater.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Sweaters
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer  shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="https://img.mensxp.com/media/content/2022/Sep/Amp_63206750df926.jpeg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Jackets
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer   shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="https://4.imimg.com/data4/DM/RM/MY-16551252/mens-blazer.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Blazers
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer  shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4iHnsFo2CpNKSVEg9VWLRs7JLczDtIqirw&usqp=CAU"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Jackets
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer  shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="https://assets2.andaazfashion.com/media/catalog/product/b/r/brown-poly-cotton-churidar-men-kurta-pajama-mkpa0894-1.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Kurta & Kurta Sets
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40   max-md:flex-[0_0_33.33%] inline-block cursor-pointer shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIREhESEhIYEhESEhIYEhgRERgRGBgYGRgZGhgYGBgcIS4lHB4rHxkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHDQsISsxNDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0MTQxNDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xABDEAABAwIDBAgCBwcDAwUAAAABAAIRAyEEEjEFBkFREyJhcYGRobEjMhRCUmKSweEHM3KCstHwU6LCc+LxFRYkNGP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEAAgICAQUBAQAAAAAAAAAAAQIRIQMxIhITMkFxBGH/2gAMAwEAAhEDEQA/ANaAnAISqAJUiVAqZWdDHHk0+yeuGNPw3935hVtOIlMdl3fZAlTd4DlovdyaVF2CbBP3xqZMJUP3SuOHTPaq3VbGDo/e6R3m9xXPHOzVHcgYHhb3lTdhU8mFw7TwpUyfEZj7quJkyeN/NbcuqxDOnymVnhTDUUG9ZLhdFJpsusWq7wJsuT3S8xon4QiPBQcBs5mHdUFOzalRz8vAF1zA4XV8ziFNbXVMWTwmMT1pDMyqbFZXbDooVD2NHm4BamroVldt/uX97P6gkz4z+Jj5R+oOGqOe5jSf3dieY4e/otZQHw47FldiskytY0QzwXPxtuTvCAEQgJV3uQkJITkIGQhPQggJUiVAJUiVAq4Y392/uHuF3C5YofDf/CVW3Upr3BmxD8vamb/vnChg1qVGMH8xhdN3xOvAmEbz0ukq4OnwFYPd3MBd7gDxXLWM6dFpxt2fDKZjRjDHc0W9lnM+ngpW9O0n0KbQwCHSakiTkDmNIaJ1Je2/C6q9m46liLNcJI0NiD3LXmrbUxGlOKY3C+wVVWlMKh2e8ExystBTFuawhqlUXwuzXXUVhXWm66tEqzCyYV0lR6bl0c6y0idM5g2s+xWY21+5d3t91ocS8MY5x0AJJ8LrPbXeDhnuBkQ0gj+IFI3WfxMamP1y2A2RPaVpqphngszus7M094/NaPFGGrGkaw1vO0IJUIXc5AhCECoSIQQEqRKECoQlQATaolrhza72TkFQOW7w17ypOObNcO+xTj8bv+z1XHdwfP3qRiPnee0eg/8AK5+KNt+SdMT+0GmD9GdMENrNABgkONMkRoR1RqsWaBY2Q4t4jNLRPCDMTbgZ7FpN/cUHYhtNxljKbbdrpJmezJ5BZ2s+mabgx5nLAYHaxo0NNvICV21nEOaUnBbbxGHpuqGHufUaGg8BzItMw65votVs/f1kAVKbm8JafyKxtbCuDWsBnI6pB+00OAkt0HrxK4lgbBcCAYhwBykX+s0+hASeKttzBF7R1L1KlvdgyzO55piJOdpEeKmM3iwzSA6pBOgIknwC8bxgpimXF4c3MzM0OFxmbm1E6TfsVtja9MEtyNeRHXkAiODTnHfysFlP89c6yvHNbD1Zm9uDt8XhPyn3hcP/AHrhSC9uZzQ97AbAZmxI56EHxXmLGNLS/No35Q4PjskZiFI3fpNFF73FrR01QnO3NY9UENETcDzWnsUjDP3bS3OJ3lqYiW0wGs4xr3LviWP+hV88ZjTxD4Ggkve0eAIHgqXZr2htnF9hBb8MeVj5ytDVh2EqAX+BUae8McCl61rXEQUtMzuXDcq9MHn+S0WMdcBZ/cRvwGu7CFd13S4ri448nVyToxCELqYBCEIBCVCCvShIlCBUoSIQKgoSOMAnkCfJQOW7ruu4cCplYQ538RUDYT4BPMyjezEGlhsXUBh30eq5neGx7kea5+KdtuSNPNcVjBicRUq5xD3G0WyizQCJJsG6gaFV9OjNYVKhaWsMtyNc3M5plpeSOBAsJnzXHomNqFrz1XNY5jiIlr2hzTfsKnNwzmDqkOb3T5r0K1zDktJH1Bnc8CMxJPDUyubKmW2rXagroWkj5Pwf2XNzLTr6ei1VQtsYZppvc0QYHjdWlTZ4ab8nOHE3dIv3KMWZobwJbP4grjEjrEtmMlPQjkTx71GNmdK3JFrxwE2Vrsuq0BzMghzeGms6d8aKBRoybqS/BmRkeB4f2KtKrQYAgRcgcic3vdX9HFMdhK7mkEMbXBgg3AJymONwsdhq1VjQ13RuAmJJDv6TKkbJxWKrYeMIKdQ1MXW6VtXM0lrBTDS0gw1vUDYi4daIKw5pxXbTijyb3dfCdFhWDjlE98Ls/U95VYzbeJoMH0rAPayLvwr24po7SwQ8eRU3DYplZjalMyx92kgt48jcLj443l03l2QhC2ZhAQhAIQhBACcE0JyAQEiUIFXHHPy03nsjzt+a7hQ9rNmi8zGWD4A3VbfGU17gmzHtZSc91mgSSe9Vv7QcW07OBBAFWpTZOvUe5pdprZq74rF4ZmEp08S4Mp4omnDjlzdQmM31dInmQszvq4uwOz6Zt8eTNj1abj+a5+OPKP8AXRePGWZfX6Wo5+UZOo1jXG4a0Brb84F+1d+giCxzmd9x6WUfBNEfZdx7VZtaIu3l8pj0Xp1jTz7TtxY8/Wg9osUzEVMwjU+q7vw1M3FQsPaFGqYdzb5mv5EWKshEe8gtjUODvwkOj/apTMa586giBprAAv5rg2oGh5OoYRFwZdYX4cVypPMAAADs/wA71XO1saWVGbX17FNZSkiXeAEnyCqqLyePkrSiAdTPeSr5UwbtDEMoUnuHVhpgm7ieAA4LYfs82Z9HwrHPHXqdZxOpJvPqV51vg+KdJjQBmfJAi8C3qQvTi6rTwWFLDID6bqpJuGDg3nLi23KVxf1WnUOv+evcti89XwCrAVNZUlgnkoKy4vta8YwcEqQJVszCEIQCEIQQAlQhAJQhCBwXPE089N7PtNcPMWXQJUGZ2jhvpOEbRdSbUrYd4f0NQljngNIHRvB6rryDcGINisfvPtsYsYWk2jUpPw3S9KKoA6zgGw2DeAHXtqF6jXwtOpGdslvymS1w7nCCF53vZgadPFu6NsOeGGpLnPzGObiTpCpSmJaX5M1VGGHVAd6qwYBHzW7RITKNIHhpbtH91IbSaNYHeCPULtq45MdTYeE911HqYUHQeZyqZDf8qH80uGwvTVKdNpJDnNBvOpUoU28mxn4SnhahfmbiQ4ubcFrgAQATq0tIPYZVXReOD4PI29dFv/2r4cfRMM4CzMRlHYHU3x/QF5rhLiJWNbZbTC+w2a157wrfD0zxA/ACqLASSPyP6LS7MpXaS2WhwJvHG+i1iWcwzm8zD0uFmzQQSSA0Xc1emuqueMJhqTmPpun6QZLnNaMpZlgwDIMzNotdZDG4J/TMquptcWC2YZhxnqm3Feg7PwmWmwkwSxhIa0MgkCRZcnPWZnMOnhvWtcSuK0NaAOPsFxTAlVa19MYLW9UlCVCFdUIQhAITUIhDlKExdGokIQhABOSJUQF57vVLsY8wcoLGz2hgsvQ15/tw5sRiBf8Aes7hDXjzM+itXtWyPhgDAIkqd0MCxcLcswUXDN/RSnARJOvAH3W8MpRaoF+f8H6q63Twmaoah0pjl9d0j0bPmFn69XjFgbALfbDwho0abXfORmf/ABHh4CB4KOS2KprGZVX7RMNn2bXIEmm6k8fyvaHH8JcvG8MY9dV77trC9NhsRS/1KNRo7ywgesL59puuPArKstZaHZjbg8iO1bXYDKbalI1P3ecF1iRGt44TCxmxm6dq22BZAaOxa/TKe01uGaajg05mh5DTEZhNjB0WpAi3JUuAp9do+8D5XV2s+SeoXpHYSpEqzXCEIRJyahCAQhCIQ0oTZSyiTkJJShEFSpspZQOWEx1LPisYBMtIeO5hcD6OK3UrAY7FvZjKz2fbqNeObZLTr5q1VbEDLd6WqLdwUqlhHvpuqNuGOcCAZsIOaOySPBRahDbanTu/VbVZ2StiYPpKzGkAgOzO7m3jzgeK3QWc3Upj4j5E9VsDhNyfbyK0MrPlnNmlI0fqvnN7MlRzR9VxHkYX0W03Hevnmu74zz/+jvcqtUy1WyqQhpGhA81rcCLLMbGbYZflIELXYJlvdbR0yntb7LbJJ5D3/wAKslB2YLPP3gPIfqpyxvPk1r0VCSUSqpKhJKJRJUJJRKIKhJKEEIJU1KiTkJEqIOSpoKVAoK8twjy9weTJcajjPEucSfdelY6m99KrTpuyPfTqNY7TK5zSGu8CQvNsA3Lkzaho85V6q2aPBYvomV2hoJqU8odItfrDxEeQ5KsqOv8A5qu4dmBjtUGvUuI4resYZTLY7sYVzKb3OA+I4FpBmWgW7r5vNXUqJsxpbRpBwyuFNgI8FKXNaczLasYg4L57cz4rh993uV9BgrwXadM0sXiGH6leqB3B5j0hTUlsdgCAG6wOC1lAZW2u46dnaVidgYiRe0cjH+aLahhYyDJeaQd2y4EtA8C1bQylcbPAFKnH1mB3i7rH3UmVHwNM06VNjtWU2NPeGgFd5XPPbWOiylTZRKJOlEpsolEnSklJKJRBZQmoQRAUsrnmQHIl0lLK55kZkHWUsrnKXMiDMZiOjp1Kn+nTe7yBK82okmOd9fVbneN3/wAPER/p+kifRYTCPm5WlelbLNhytBPFddl0GnEU80QXtcLSDew8TZcKzxkAOifsN5+kUxmludsA8Fr9M/t6BKJTMyXMuZsdK8d33wnR7QrxDhUyP5EZmiR5gr2DMvI9/qpftGqG6sbSafwNd/yVqdol12JUpgalhj6wzDzC3GKxDqlNriIDmMDXCwc0NDQRPFYfYgY4gPytPMPyz3haqm/KwNBBYM0DMS25kmOdltEMpa+nIa0OMuAEnmYuU6VGwby6nTcdXU2E+IC7Zlzz22g+UspkolA+USmSiUD5SSmZkZkD5QmZkIIAcnSmBKESdKXMkhLCILmS5k2EsIOeLpCpTfTOlRjm/iBEry7CPyOLXWIJlerALyfa/VxNYcqtQeTytKK2WNevIA4QVN3aGfEsP3ifIEqjY+YWm3QZ8Unkx3qtbarLKO4bPMllIiFzOgsrx7eU58dizr8UjWPlAb/xXsELxval8Xizx+k1v63K9O1bdFwLmtOkd4laTDYgRoJ7BHNZilr2q6wR8V0RDKXpGAMUqX/Tp6/whSMy5UmZWtHJoHkE9ck9toOzIzJqRA/MjMmIRJ2ZGZMQiDsyE1CCKCnAqO166teiXUJwXNrl0aUCwlAShLCIJC8w3yoGnjah1bUDHjhEiD6tJ8V6hC8134NT6W4vHUDWCmSLZQJIHO5n+bsV6dq26VVKoLfothuh+8A4mm9xPi0BYzDsD3NbpJjRbPc7M6vVLW/Cp02szcC6QcrTxiDPeFtafGWdY8mwhEJ0IhczckLyHeKnGOxYFj0pNvvAO/NevryzeygP/UMSNHO6J7DprTYCPMHyV+PtW3SqZMiY9lebMplzmgakgDvJACpqesOsQtRupSNSuwfVZ13eGnqQujOImWXem9KROhJC5G5EJUIg1CVCJNQlSFAIQhBTByeHpxaEwtQdW1V2ZVUMtSSQgs2PXRrlVtqkLszEIhZBVW8Wx2YunlcCXNu0tMOHceamMrhdX18rS7kJPdxPgLoMhsrc1rnNJqvcAbNDQwnvdf0AV9tbD/Qauz20zlpVHVKVRgs2SzOxw7QWRJ+0VptlbGDCHMqEggyHtBN+0R7Ks3s2HVrVdnmmcwpYnpK5s0NY1rrmTxNo18jFZteZjPS8VrHR7SCARoU6FzwzYY3unzM/mu0KypsLyvf9hGOcRxp0/QFerQvLt/6zXYyGkE06VNr4Mw6XOg8jDh5q9O1bdKzAONQAEXHFbnc2iB0jgLABo8TJ8bBYfZehPNej7qUstFxiCXAeQB/5FbXnxZV+S6hCdCIXM2MhEJ6RA1JCekhEmIhPhJCBkIToQiFUWJrmFWxoBNOGCjCVO5pXMuKuXYQLk/ASmBVZkhep1TZzuCh1aDm6hSgNqkKfs1+d+U6Q6bB3ZoddVVq02IyXvP3QAe0n9ES12yavwwXRYdYtNpHzWIkGZtA7lIxbPhVSYlzHSR2iI8g0eCj4RpIjN87mkAxIEAuBIuZIdr9rsXbbNXJh6rj9nhbUwPdBQBEKFQxrTxUtrwUDl51tfdgPrVus6nUe9zy752uBJhxbIPkfBeiyoVRlOpUhzhFMAGHQQ50GDFwYLfNRNvTtMV9WmO2duVXDGt6Snlm7pfMd2X81tNmbP+jUxTzl5zOc4kRd3ADgAICvMNs8ZJDHEwYknw1Vcre5Nowr6YrJIRCVCgIiEqECQgpYSQiSJIToRCBsITkIgQiE9EIkyEqdCIRBITX0wbESuiEFVitnNMltj6KRuwz5wQDLoIIBFhyKmkLjh6Rp1C+nEOMuabX5g/kg1GHpAcNed1F3i/8AqVx9qm4DvNm+sIobTEXa4H+X+6i46v0ljZo0H5lEvNy17DxCm4baNRutwtNiMCx3BUmN2aWXAkILDBY9r+9Q919mVKNSvUrdUvxeIqNJIfma8wwiJgZQ22qractc0zABE903WroPDhPHionZnDV4apI8ORVDjqOR5vOYvP8AuI/JWezXyG+5gkgTbnafVc9qUJYHAfK50xyc6fc+6kU8IhOhCINhEJ0IhA2EkJ8IhEmQiE+EkIgyEJ6EAhORCBqEsIhAkJUsIhAkJQiEoQOCJSIQKmPpg6pyVBS4/ZIMlljy4KBgMY6hUDKnyTBnVvI9y1MKu2lsptUSOq8aHgewqMJaLZcC4Pd+itDBFxPfdY3ZONdTIp1JY9oAg3DgPrNPEey1uGqh4mbJAqdoYUMcC35XTHYeSiQr3aTR0Z7CI75/tKpYUoMhEJ0IhAyEQnwkhEmwiE6EQiDYQnQhAxCEIBKUIRMgIQhEFQhCASoQgEIQgE9CECVKLXghzQ7qzcTfmq+tiH0HhlN7g3kXF/q6SlQkphOp1HO+Zxd/E4u908oQgRCEIgIQhEhNQhEBCEIP/9k="
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Jeans
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40   max-md:flex-[0_0_33.33%] inline-block cursor-pointer shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/377901/01/sv01/fnd/THA/fmt/png/Fast-R-NITRO-Elite-Elektrocharged-Running-Shoes-Women"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Casual Shoes
          </p>
        </div>
      </div>
    </div>
  );
}

export default ByBrands;

import React, { useState } from "react";

const Summary = () => {
  const [activeTab, setActiveTab] = useState("Education");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const journeyData = {
    Education: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Florida_State_University_seal.svg",
        title: "Florida State University, Tallahassee FL, USA",
        subtitle: "MS Computer Science",
        period: "2024-2026",
        details: ["Fully Funded with Graduate Assistantship on Spring admit", "Current Vision, VLM and LLMs Researcher under Professor Dr. Chakraborty's Research Group"],
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Tribhuvan_University_logo.svg/1200px-Tribhuvan_University_logo.svg.png",
        title: "Tribhuvan University, Pulchowk Campus (4% Acceptance Rate)",
        subtitle: "Bachelor in Computer Engineering",
        period: "2018-2023",
        details: [
          "Fully Funded with Merit-Based Scholarship & OnCampus Residence",
          "DocSumo(Industry) Undergraduate Research grant Receipent for AI/ML Research",
          "Project Mentor, Instructor and Guest Speaker at Multiple National Tech Events",
          "Directed Hultprize OnCampus at 14 Colleges, incubated over 400+ tech startups",
          "Multiple International awards and Nominations for directing Hultprize initiatives"
        ],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHXGOEin7cvt-RWdlxMbjXmY6FI49iZJFaQ&s",
        title: "The Times Secondary School",
        subtitle: "Grade 11, 12",
        period: "2016-2018",
        details: ["Fully Funded with OnCampus Residence, IT Co-ordinator at Science Club", ,
          "National Physics Olympiad Champion"],
      },
      {
        logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQREhUREhIVFhUWGB4YGRgYFyAaHRYaFSIXFxUdIR8YHSggGB8lHhgXIjEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLy0tLi0tLS0tLS4tLS0tLS0tLS0tLS0tLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABgQFBwEDAgj/xABSEAACAQIDBAYFBA8ECQMFAAABAgMEEQAFEgYTITEHIkFRYXEUMlKBkUKhsdIVFyMkM1NicoKSk6LB0fAWQ1SyNDVEVXOUwuHxCCV0JmOjw+L/xAAaAQACAwEBAAAAAAAAAAAAAAAABAECAwUG/8QANREAAQMBBgMGBQQCAwAAAAAAAQACEQMEEiExQVEiYXETgZGhsfAUMlLB0QUzQuEV8SM0Yv/aAAwDAQACEQMRAD8A3HBgwYEIwYMGBCMGDHDgQuWwY+Ga3E8hhGzzbdmf0bL0M0va4HUT+fnyxVzw3Nb0LM+uYYOp0HUpuzDM4oF1yyKi95Nr+XfhPrOkPeEx0NNJO3LVYhR8OP0Yh/2Psj1mZyvOyKXMam4AHG3j5Cwxc5DWSS0025pfRVCncGwuxsbHT52xiXOcYy9U+2jZ6bZ+eDEzDZ9SqsU+dVPrPHTqewWv81z8+PEbISSvups1YyWvoUm9vIviVsxtG1RNTyMx1PG0UidgdNMiNbxGrEKFaWMLWTlxO1ZJZ1BJujsu7PctsUhpAOfUpntKzHFoAadLrQccd8YwzXpH0fKXaMZjMXUAlQeIB5XF+3H0uxM66hBmb3Q2IN+rwuoNjwwx5Uv3/WNf5EI+Z8UdczCnzKRNXGos2j1tKiJXse+18WNNgExvusha7Q910v8ApzA1jlzXkFzmn4h4qlR2cL2+Y496PpFCNu62nkgbvsSP5/Tj5y6ZaXL55aaXUkrDcXJJjZ9KaTq7Q9zi8V1qJ2pJI0ljjhUuzAEl39Ud3IE4ACPld90VHMdPaUwQJxHCcInDLWFc5fmMdQmuF1dT2qb/APjEvGfZjsO0D77Lp2hk57stdW8Bf+N8SMh23Ik9Gr03Ew5MfVb+X0YuKsGHYeiUfYg5pfQdeG38h3a9QnzBj5DX5Y7jZILuDBgwIRgwYMCEYMGDAhGDBgwIRgwY5fAhfJx5VEyopZiAoFyTwAHecehOM3z/ADB8zqDRwPppouM8nYdJ4i/dw/j2Yo990c0zZbMazsTDRiTsPzsEZhmU+bSNT0pMdKvCSXlr8v5fHHvW0klLSquVorIyFpJwQz2Xu9o87eWJAlvQh8qOkQOepp4Tgevz5356sVuzG1CRTKjqY46g6gp4qkjcyh7Uc9nYcL4TxHE6/hdYXi0ik3haflOZjV251GmiecqCy0yXfeh4wC5HrgjiSPHCjs0r08knpNaVjpWMKxNZV0sFZGJ7eBFvLFpS1K5c8ySkJS8Zo5DwWPUevH534geOM+zfM3zeqL5ZRGSw0tPPwjFuR0twv53PhhptF1QBwGW+S57KjGOe1x4XYiACf6wkFXcuUPG4njFjTVOlhcDXCx1o1zwNhIR5Yh7S5tCjTU6VtJ6PM+8Y6tbxMxUvpCX1X58PHE2DoqkqSJMzr5Zm9iM6UHgC38AMMdD0bZbCBakRiO2Qlz+8cX+HoNEEk9P7Qf1CoSDAw38fI5JPqtu4I6tpqatg3UgjD60k1Wj4NbqdxOPaLaiJUD01XDI5qZJXi16DIkupVHXtxHVNsPP9i8v/AMFT/sxiBX9GuWzXDUiKSb3jLIf3TixZQP1DwWXxbsJaDHLON1UUWSmVKammQbt2lqZVU9RdXqIGXhzf93Fv0f0KQU0ko4JJIzKSb2jQ6I7k+Av78Lc3RbNSkyZZXyxH8XIdSnwJHD4qcVddtZVUsD5fmlLuQ6GNKiIfc/C4HAjy4+GK/Ct+amZI8Vo61uqt7M4AkTtmST5+SvaiiNXmEqlis8UkbxEsdIpxp1aQOBJ6362JO1Wa0lTKaWojOgHQtQOSS+zf3jFfBmMiRLWPNAZZ1FNA0ZvGi34uzd/bb8kDF3lVAcuil9IlSWmWzxkrdy7HU3D5RLcvE4Ug4g96dc5rYfMwAGwTngCQY306qsy7NZ8pkWmrCXpmP3ObidI7j4eHZ5Y0aOQMAwIIPG4NwRhIqMykqpY6SspAkNSG0Xa7roGq7DsP88RNn6+TLKgZfUteF/wEp5Dj6p+jwPniWPuGNPRZ2ih27b4AFSJIGThuI1GoWj47jgOO4YXIRgwYMCEYMGDAhGDBgwIXBgODHhV1AjRnYgKoJJ7gMCAJMBKPSBnbRqlHT8aioOkW5qp4E+/+eIVJBSU6HKJCyvIgLSeqJGfub6By7MRtko/Sp5cxmcI0rGOnvbgLHioPMgf9WKvPaKpQrBWWmsTuZbWLfk35HxQ2PccKFxPFH+v7XoKVFgizh0EYncu5bhu3Uq8yqoqIamGikeOGKBC1wBapUcLi/q25nuOKzPMyoY4Zqh9MlJIzaY+If0hT1t1+S/MnkPfj4hrklpJBWEmCFSSxNpqZvkpx6zh+QPM8jjx2B2aOYSrmVVEFgQBaSA8QqqeDEdvK/ibnuwzQpBwvv+UefJKWqqKRIGDuWW87yT4dF9ZFslUZuyVeaakgUDc0wYjq/JLauPEdp4nwxolbX0uXQAyNHBCvBRwUeSgczis2z2vFCEiiQz1UxtFCvMn2m7hjNM9o6mhnTMc3hStVxZV12WCRusFCNwI4eXvw61rqsTgNB+PyuSSrnaXpalEeujpSsbGyzT9XWfyE5vhRqc+zupmjg30qyyjUsSaYyq+0wHFB29fswx7OVlO0Mud1s0dRUIpKQgi1OL2iRU7Dcrx7PPjhs2Cyo01NLmNSL1VQpmlLfJW2tEHcALf0Mbh1OkDDBOXf/SFkiRZga70T7ISb3WUEm9k3ZmVbsl+/svbniZR5/nlPLJEJZmkhF3iktISvtAHi6+KYujl5XZ9K+33UVQrCRzu0mj6LYdOkLKjLDFmdLwqaYCVCP7yK13Q94sSfj34u6u2QC0bd4QqHZrpbkMeuspTuwbNNB1gh/LTmmNDpaylzKAlGjnhbgRwYeRB5HCFmeWbyJM8ypQsjJqmg5JUJ/eqw5awb+du/C1LmMLTwT5CsqVkoBlp0X7kF+UHv1V493Dt4YwdTa/Fgj7ddlKtdp9ipcs1z0SmejbjPSPdrD2l7eHeOI8RifS5/BKtDJTxyy00QN41BkdJ7dRXHhckHl2jDZsdtalcrRum5qYiVlgbmpHaPaXCftblEmTVIzWiQ7hiBVQD1bE+sB8kfQfA4xczteB2DtDvyP2W9K0GmccRjh1ESnDMM5AaLRTa6xkusZIvCD6xd/kD6cUtXBNmBnoatIlljUSxvGSQpPIHVj5yOsqWeaemgWVaoiSKoZwqqlrBWHrdTu7748hnRpyYaX74qp3tJO3qa7ch3hR8kcB34579nLpUaZaf+KCYBBnLXfADEQcSrro/z1pkamn4VFOdLA82A4A/w/wDOHEYzDaKYU9RFmcLq+hhDVaORawv/AF3hcaTSzB1V1NwwBHiDyxek44tOiVt1JsiqwQHabHUfccipGDBgxqkEYMGDAhGDBgwIXwThK6Ta5tzHSR/hKlwnuvx+e2HVhjOat2qM2kZRq9DhJUdhcjgPifmxlWPDG6dsDR2t85NE9+nnCkbR00tNAkKUkdRSxoAQSdasObcPjcccVVDmVQ0eh6Vqqkfhp1rIyeAYdZreIuO/Fts61bUwioSvQub6omiUqrX9U2664jy5lDClTWOhgqqUHeojWSYsPuRPY4JI8cUa0vcI1T3aCm1wcA4jMic99Ix1CoMwo/slXxZVGztT033WpZjdmPyY2Ycyt9Iv3t3Y0LarPosspDJpFwBHFEB6720ooHd/AYpOh7JDDR+kycZqtjM7HnZvUHzk/pYrajLVzzMZxKW9DorwoFYrqmb12BHs2+ZcdItbeu/xb78yuK5xcS45lXewWzLxaq6s69bUdZ2I/BKfVjX2bDn8MVdEgzfNXmbrUlAdEY5rJP8AKbxt/BcR8/zmvyemlSb75iKssNSCA8bEWQSjt/OHdi+6LfRkoIooJo5XC6pdLAneP1n1Dnfjbj3YDeDS/fAKEq9IOyVLU5jSUkMSxSza5J5I+BEa9tuVyb8bY7tXs/mNDRTuuaNLAsRDRzICxRurYNx42OL7ZsekZ3mFRbhTxx0y+frv84xK6YZNOU1H5WheP5TpiwqOD2M6Z80JIqsszgZQYvvRqUU4Nhq3m7VdflqxabOJndVSwNFU0kcLRAK2gs5W2kBgw58MaDUUv3i0Q4/cCg7CeppxS9EsurKaU9ysv6juuIdWJaTAz23Qs/2S2IMtRUZZWVU+imKusUbaY5Fl6zNbs42+OGGly9MkzONYhpo64COxN91MnqcTxsf4nuxYZ197Z9RzclqoXgbxZOun8MWPShRRzZfMHkRGQbyNmYLaSLrLYntPEe/Euquc4A5OHvzQou3mzLuy5jRdStg4i3KdB60bd/Dl8MXGzOdRZpRiTSLOCksZ46W5Oh/rkRhVyrbCszKCKOhhKOUUTVUotHG3J9A/vXv7sR8roWyPMYozK0lPXjQ7ueIqV46j3a7/AD+GKFhu3XfMMvfohV+R0foNbLks7SeizfdqchipPaY79t7EEd4/KxY02VklqqscUlORoSEWV92PkcOK37bcTiw6YMpZ6RayHhNRuJVbtC3Gv+B/RxFy1ZppVzGKmWpSojV03kgHo72s6jVyF78hjC0tvtbUjkeq6FirFoc2Yw5eAnAHnywUqpzGKZUoEpGignDJG7DTdlF0IXnz7Tib0ZV7NTtTv69O5jIPPTfq/wAR+jiRQ5axlWqrZoy6XEaKbJFq4Mbtxduy5xVUTinzkhSN3Vx6uBuCy93vB+OFBLXBx6e+9Mm7VpPpDQXtTiM8T/59FoWO44MdwyuMjBgwYEIwYMGBC8nNgcZZs1nJgWoqhHvJKmp3aLe2o8Tz9+NIzmXRBK/dGx+CnGcbP0kf2Op97TzzXd3DQ3vGb2v1WBvjCoTeEc11LCGii8uEglo9Ty2Cm1dbSNI/pKvR1S2vupDeQEcCNHr+8YXdtKSI09NTU+9LV9Sod5b62WI6eIYarXf93FvE0UErSx1VRC7AAippmkuFHAFrXHxxyuc1GeZajsHEdOZiVuFZmDkMoPZ1VxtZMal46SVFtIawBpMGN/DEZTzKdtqcwWgy+aZeAhiIQeNtCD46cRujfKPRcvgRvXZd7Ie0vL12v8QPdip6XrvT01KL/fNXFEfFb6j9Aw9oLAAY1cYpjmVzEh9JI39TltD2S1O8cd6QDV/PFvnOwtHUtvTFupb33sLGJwe+6c/fipqxvNooR+Jo2flyLsV+g4dq5rRue5SfmOLOc5t0Axh6oWR9HWTVzxTVNJXBA9RICs0Ql3mg6Q7Nwa+PvpI+yoot1VehvG8sS64i4Ytq1Lwbha4w1dDcWnKac+1rb3l2/ljx6Yr+i06j5VXCPPi2Nu0Jr5DNRovubMs50lfsfTEEEXFT4eK4WejSozX0CNKSKk3QaQK8zve+ttQ0p43xr5GEPoaj00Dr2LUzAeQbFG1BcdwjT7qUr9IGXZiopKirq4hoqFVfR4ypiMvAsGduty5YdaLo8pFYSz72rkHy6lzJbyX1B8MROmZP/bJHHNJInHC/FXX+eHaBrqD3gH5sVdUd2bSMM8kJF6Ll3MmYUPZT1RKDujmGpfoxZdKGUmpy+XT+EitNGRzDxdbh7r4rspG72gq17JqWOXwJQhL4epYwwKnkQQfI4HuLXh/QoVNkVauYUEcjDqzw2YeLDS4+N8ZvsMkRoaimqy/3jO6DSWHCQ2AsnPrhrDDR0POVo5Kc/wCzVMsXHsCnUPpxTZMm6znNYBIYhJGs2uw6hGkk8eHyziSwRUZ3+avSeWva4GF9bO7ENPEnpMaxICb8LzSi/DUT+DFu7jidtvRpSGglhUKsMoSwPJWIP88Vk5eaSN0krailVrSuCQG1eroVLEgHmRiJm+XMlDVS7uSOMzxvCJL67WCsTqN+3txyjABAHf0XomX31Q578z8unFhGczBnLJbFGb4+8RMtk1Ro3ein4gYlYcC824QYXcGDBiVCMGDBgQqba0/edR/wm+jCNk80MdFSlq2Wnk0EqsYLBhqPEpY6uOH3aSLVSzr3xOP3ThL2YzCWPLoHjNOqqGDvMxGkqxsBZeOMKnz933XUsv8A1jH1D0O4Povum2jrtQCQPVJ7RhMBPvY2+bEeM/8A1Mtxb7y5d3hjsW0VfM1opKdY723rIUX9ESG7/DHlKdG0dMxIbfUZGocmID3I7hwwxY3TfE6FZW9l27LQOn3yA8FN6UqgRT5Y5R3C1LPojXUzFVuth2nFj/b4f7vzL/lW/niJ0pHdvl1R2R1qAnuVxZvow+41JAY2ROfqkFj9JtYPs1NUGlrD96rGsQgJlA1KxYrfgPHxwx51twr08yegZgNUTi7UxAF1IuTq4DHB1Noz/wDcofiVf/thyziPVBKp+VGw8eKnGlRzJbw6DVCzjo+2sWmy6nh9Crn0obvHTllJZi11b5Q44idI21YqIqdfRK2PTVRPeWAqDpLdUHtc9gw19ED3yil48gw8rO+I3TA1qelPdWwn52xLXM7fLU6qNFL/ALfL/u/Mv+Vb+eFPo42sFPSuho6yS88r6ooC4GpuRPeO0Y13CN0PH7yk/wDlTf5sZtcy47h21Uqh6SNrhUZdUQ+h1sZYL15YCqDS6NxbswwUe3arGg+x+YmyqLilax4Dlxx3plktlNQO/QP30w4US2jQdygfNiS5vZDh1OvRCyZtqR9mlqfRK3/RCm73B3hOvVqC+x49+G/+3q/7vzL/AJVv54hU417RSEf3VEoPm76h82H3E1XN4cNBqhZ70SziQ5jIFZNVa7aXGll1BeBHyT4YhKt9pKgadX3j6vDrepw49+LLomOtK6o7Jq2Vh5CwxXZdMp2irpmYKkFKqk9g/BMb/Pix+Z/T8IGYhXdZnFekX3PLdFuX3VWsPzEtfywu5xWiWiqjJUySTWUtE0ZiEQ1D1Ub6bnD3RbR08qGUS2jUgamBRTflYvz92KHpFro3y6R4nRgxVdS2N+sDa/uxzHjhJBnBdeyvPbMaad03hjjuM5n1CZtmv9Fg/wCEn+UYs8QMkj0wRL3RqP3RicMbtyC5dU8buq+sGDBiVRGDBgwIUepjDKyntBHxFsZdshTUj0+5rACYqho0B1DrPbhYeR541VsZZLk+vMKujD7veMlRG1r2ZDc2Hvb4YwrDEFdT9PcCyowuIyMjSDB8imCLLqDXPBFSx72FQTrS4OoXXifWwnZ/mVzk+aaVQJKYZAosFDG1vK2vDvHsRE0jSVEsszsAGu2gELyBVLcMRNv9nIpctmpadUVoxvkRbA6k6x4eI1D343sxIqCcBl4rG0PpuZAJccDJ6Y57nkpvSjlhqMtnVPXQCVLc7xHXw918XOzWZiqpYahf7yNWPgbdYfG+K3YPORX5fDKeJKbuQfloNLg+fP34XNhcwXLpKzLKhwiU5M8LObAwPx5/k/xxsWm6WagpFS9r/uGb5ZU/JcyU7H88XQfE4bM3zinplJqJ44lI+WwF/IczjMNuswqs0pWqKWHd0tMd+kz3WSZo/lRr2IAb3PO2GrZDZKheKKs3fpEkqBzLO29Ykj8rgvG/IYs5oDGl2mGCEq9G22aU1GKZKeqqGSWQKIItQCFrr1jYduOdJW0VTNSqZMtmgjWeNg8jpxKk2XSOsL4Y+j8bivzSjtYCYToOzTOOz5se/TKv/tUx7niPn90TGl5orCG5x5qNF8NtFm+nV9iE5kW9KW9u/wBXlhY6M8+qaahAjy2aeMvI28jkTidXEBW48LY1WpntTs/dGWt+jfCx0PR6cppzYdbW360j2xS+3szwjMb81KUOkjbFKimjp5aappmM8RJmi0roQ6mIK31eWNPyjPaeqW9PPFIO5HBI8xzGFTbUb/NMspLXCs9Q45iyDq3HnfEjbbZihWCasaIQvEhcSw3icMB1eKc7mwwOuODRET3oXhsL93zLNKvmBKlOp8Ih1vnthm2uzUUlHPUE+pGxHixFkHxIxnGxL1+V0iTyQioppvu8mi+/iL+sxB/Ci1jiftTm0ecTUdBSyCSGQioqGXsjiPVU9xJvwPbpwPpzUn+I+yEz9G+Wmmy2nRuDFN49/alOs3+OEvYVYqr7LVlQwSGomMYYkKAq3+frJhy6R869By6aQcGK7qO3tvwW3kLn9HCzl+z8cWW0tC0qR1JtUBX5O5Ooq3tcDp7+GKvceye45uMfda0Gg1WgmOY05r2y3LI6loY2r4Z44PwcQUKWKiyaxfjbwGK3ajJZIFCStHrq6lCUjBCKEFuAPmMOW0FDGaUPLSbyQAC0I6ysRzVuBAB7cKmWiaorqGCp9enjMj34kG5KavGwXHNe0DCM127NWcSagPC2ZGGmOEc4nBapCtgB3DHpjgx3Da8+UYMGDAhGDBgwIXycIHSAhpqmlzBeSNof81v+xfD/AHxVbSZUKqnkgb5Q4eDDip+OKVG3mwEzY6op1QXZHA9DgUi7SZ5KrbqSsGtuIjgBUKp5F34vyPJeJx8bH1EUU+7ggmnmf8NM4K6EY8eDcVHgeJxzZjVPEYmkjp3h+51ElgJSq8IgrHlw4aufDF/NmFLS66EgwIYS4lvbXfqsQ3Mv8+F24kOldeqQxpoNbJ1jLrgBO4Enml3ZhvsPm0uXubU1Wd7TnsD+z/0fop34tulbZf0iNKyKNXmpjq0HiJowdToR28r/ABxWTbPS5llqxyXWohJamkY6WcJ6pI5rcWH6pxe9HG13psRgnBSrg6sqNwJt1ddvp7jjptqFwFVuYzXCqUuzeWkzCutnc2gzGkWWO27ddLIfkm1nQjwwsdG9Q1HNUZNKeMLGSnJ+XC51cPIn5z3Y8s9yifKqh8xoEMkEhvVUw+eRB2Hn/wCOVLtTnozKSnqcoSSSrp1MjOBpEcdmvG9/XJPJB+V34s2nemPlPkeaomDP5BRZ3TVTNpiqoWgck2AZOuhJ+GI3SbtbQS0FTTLVxPIygKqHUSwIYcuHZhd+wAzjLZKz0qaorFF9250rE6cWjEa8FuLgHtw65DHS12VFoIIk3kDoyoiqUfSVccud/wCGJIaLpOJGBQqWo6SqP7HGIPJvfRtAG6cAvu7etpta/biR0ebaZfDQU1M9XGkiRhWDXWzHieJFu3FRPml9llt67IKfuOreaLfAYbNqZKegyzVLDE5SNYkVkU630hVFiO/j7sDmsi6AcTuhQdlpRW5xWVqkNFBGlPEwNwS3Xcj+fjjnSFN6bVU+TxkkOwmqbfJiTiAfzj/DCzVbM02VZbFPJJPFXsvVMEhV3kfiE08mAuAeGPvIsxqMlY1WZxbw1gBMqsDKjKOEbIez83gMWuAuvMMxgB0QtL2mz2LLqZpntZRpRBzdrdRFH9cMUPRls21PHJWToFqatjI6hbCJWN1QD5PO5/7YhZBkk+ZVC5nmKFEQ3pqU8kHyXfx7f6tid0lbWNSRrS013rKjqRKvErq4a/5ePljINP7bczn79UKjzyT7L5vHSKQaWh+6zHmGk9n+H6+GHP5JWEgeniq6c30iOxdDbtHbx7V44g5Nsb6LlklJG49KlQtI1+LP7N+7s95PbjmS5ZA0WuiZqaqiAEkbE21AcRIh5g94wvaKl4hjch7KesrGtF85ztlzJBkdQvHZGadIEdKxH0330Et7xC/WsfXUgd/DEzo5iM8tVmDj8K5VPzF/oD9HFPtJm8dTTQtFEgq6kmG45gKbSi/aCeHk2NCyDLRTU8cC/IUA+J7T8b4WYJIGgTlqfcpOc4Q55jTIHHLPGBKtBjuDBhlcVGDBgwIXjHKGJAIOk2Nuw2vY+4jHrjOKXaEU+f1FJI3UqViZLngJFTTb9IC3mBjRhiz2FkTqJQvrHycdwHFULLOkbJ9xL6WBeGYbudR2FuTefAHzHjiZTUkcKQT1Enpk5ULTIvEW7CB8CXPLD5X0aTRtFINSOCCPDGVrHLQSyULFVMq6aeoYHqK7cVv2cz7/ADwrUaGOnQruWWubRRFOeJvm3rnhrGYUvJq+WSqadrTVDXjgjBISNQdMjk9iAi1+baTift1sfM0gzKgOitjALKvAThezztw48xww0bM5BFRRBI+JIGpzzc/y7hi6JthigXU1zrZWZUqcAwGA/wBaJQ2H25izAbphuqpOEkLcDcesVvzHhzGI2fbAXl9Ly+Y0lSfW0j7nJ+cv9eWPTbPo/irmFRExgq1sVlXhcj1dVufmOOF+m26rsrIgzenZ0HBaqIXBHeew/MfDDbRJvUj3e80olbP6mvy+f0w0pp6jlI8PXp6kX4ll+QT/AFY4i7OdIy0lW08cRWCoOqeAG4WTteM+PcfLuxtuS7UUdav3CeOS44qTZvep448sw2JoJzeWjhJ7SF0n4pbGotDIu1GKIWIRZ9BvxSmUegLVmsDaTci2pYtNud+Fse+edIq1VWtTJEWjp+NNATZTJ+MkPhwNh4Dvxq32rcrvf0Ud9tb2/wA2LLLtjKCnOqKjhBHIldR+LXxY2ihndJRCyTZyfMK+b01aVp6k8I5pupT0w70X5Z/rjjQ9ndgQkvpdfM1XVcwW9SP8xf68sXud7VUdEt56iNLDgoN2Pkq8cIdVttX5qxhymneOK9mqZBa3l2L858sZlz6mLRdG/v7KUybcbdx0AEEQ31W/BIV4kFvVLW+jmfnxQ7MZUlAwzLNpdVZOwAvx3QbsHkOZ5AcMX+xewMNAd9ITPVPctM/Egt62m/Lz5nF1VZBTzTCodNUgQoLm4A7eHK/HGFR4a27T7yr0rl7/AJJjklOHJYZKyoWd3E0jbynlVyp3duSHkSp5juOPVoIZt9HmIXfUygmZboXibVpa6/Ajvx6T5YkDLR1Oo07temluQ0Dfi9XMfkn3YV0yj0ysemgmlliBG+mc3JCHqqCOzu7zx7Mc93DgB796ruUQKkuLyAADOwEDA6SMCN1cdHeTCeZq4pohS6U6HsHym8+J495bGlgYjUFIsKLGgARAAB3AYlDDFNlxsLk2y0m0VC7TIdPefNfWDBjhOLpZeckoW1za5AHiTyGDGd7UbRiTOaDL42Fo5DLL+fofQvuHH9IY7i5pkAE6qYWfdOMhTNFZSQwhjII4EEF7HDBkPTYqwqtXBI8o4F49Nn8SCRpOO7b5XDVZ+sU6M8fohYqpKliglcAEeWKXLMioaiWR0y6rVYIDIad2KvOzMoUr22A1XtjpzSdSa14mAqpq+3lS/wCFqP3PrYPt5Uv+FqP3PrYU8myvKZaySnEM7hk3q9dk3JRC8sTarMSCOf5WPjLqHKGp1qZaaoEc9UYI7S8Y10Ibt1rHiTivZWf6SiU3/bxpf8LUfufWxT7SdJ9BWxGKSlqB7LdS6HvHW+bGYbR5WaSqmpib7pyoPePkn4WxK2Q2dkzCpSnjuAeLv2RoPWY/w8cbmxWcsvOGHVXp1HMcHNMELX9gttWRIoqvUI5FvDK4tdbkWY93Dni06XcrqqqjRaPU/wB0DOiNYutjpt7QBsbYZa/ZqCanWlZBu0UKnYU0iwIOE1aisyc6HDT0l+DD1ox/DyPDyxwWPNF97Noy/tdF1OnbOKnDX6jQ8xz5Ji6OaCop6CGKrJ3o1GzHUVUklFJ8BiJDtYsjvHJEHSSo3EagA61sNbMG4EDji0iztK2mc0kimRlIAJsULcLkeF74UcupGpZHnkjb7iG3aW7ZDu4EHeSFJP5y4ipVLnXm6qlnszYeKo4hgBkfcqVmvRtllU8hivBLGRrMLaQhIut1PBeHdbEH7XuYwcKXOJbezJqIHd8ojHabUaGsADCSaVY21izF2VN5ce828MTaLN2IWpBNjvJLX4FYIQgFu7WTjRtteAAcfND7BAJacsPIH8+Chf2Sz3/e6fA/UwN0d5hN/pmcSlTzVNQB8PWA+bE+7xwVQ9NZ5BCJHXV14XbiSp+StuzHhHNvMuqwJ5Gh3ihJZCdQUmPWetxsDqxf41w0HgFQWGcb2EgZHWPz3rlPsJlVBqeUGeWNDKwlbUdKn1tAsD78aFQshjQxABCoK6RYBSOFgMZrnVVv4oKxbMd3JBJp467A6gO+4ViMOOw0+qlVPxZ0DxWyun7jLjH4h1R0OMqa1jFOkHzjMH37zU/aSGWSknSBrStGwQ302Yjq8ezzxn3Q3ktbSekGsDxxm2lZGuS63uw48Bbhftw/Z5tDBSLqmkC8OCjix8hhKZ6zOTYBqajv6x9aQfx+jzxc2m40sAklVoWNzxfebrdz9tz0XhtxtY9SssNGpeOJS0sii/VX1tP8+3sxUbP9KlBRQiGKlqLdp6l3PeetjVMqyGGmh3EaDQRZr8S9xZix7cfmrbvZpsuq5ICDuyS0R7GjPq8e8cj5YZ/T7PSqOPafMptNqBYKVIQweJO594LVR05Uv+FqP3PrYPt5Uv8Ahaj9z62MTyeCOSeKOZ93GzqHf2VJ6x+GNGbZPLiVrVE3oYp5JGj1ddmik3KkN3Pe/wCjh+rZrPTMEFIymb7edL/haj9z62IWbdN6GJhTU0glIspkK6VPfYHreWKQbD0cBrnqRUyRwSqkRh6zaXTe3YW5AFbnC5mezCQZVDWMwaaaZeCtcRxOjMgI9o2virKNlJEAolTuiaoabOoZZW1u29dmPElmR+ODHl0M/wCtoPKT/I2DGP6iLtUDkgLTdqsvePOaeqVggkppYw7WAWRVfRcngOY+BwsUmWZiZ95LmMfpoiPoumVCrgMN6j9W1rMCB/LGxZ1lENXE0E8avG3Ye/sIPYfHCE3QpQE3WSpXtADrw+KXxlSrMu8Rg5ZSiEu1tUpzlC7xb4ULrUMhAQzbt9QB7+IxTbM5J6blcEYmhj3da0km8kCkR6EDEDtw9HoRofx1T+sn1Mc+0hQ/jan9ZPqY37eiBAcdNNp/KIWb7S5U+Y12/pijisnkSNQbkLDpUuw7Ftx8sbrsXsnDlsAijALkAySEcZG/l3DCxHk+X7NKaoiaQykR6iFZl4M1hysDbj7sH268v9ip/Zr9fFKrqtVobTBLQhaVj4dARYgEeV74zj7deX+xU/s1+vg+3Xl/sVP7Nfr4X+Fq/SVMqyzro/jZt9SO1PL+QSFJ8hy92K6TM8zowFqacVUam4dOJFuR4Dn7sc+3Tl/sVP7Nfr459ujL/YqP2a/XxkbBVmWtITzP1B10NqgOA3z7jmvql2vy+QjeLJC293rBluC+nRckX7PoxKysUIWONKyNkWKSPSWAJ3x1E8fDhilrulDKJvwtNK/50KH59eKSo2oyBv8AZahfzVtb/wDJivwdpH8ZWwtFlcI4m94I84OqdKKiQJMJq+By8O4UjStkGqxbjxbl8Mdq2o13qPWxaX3bMoIPXj06z5OFW4wh/Z/IPxNZ8P8A+8SafanIE/2WpP5y3/8A2YgWO05XFc17LN6+7ua0bc+SZ6na7LoywijeYs6yaVWyh1GkEX5YIa/M6sBKanWkisAGbgQPeO7uGIVD0o5RB+CppU8oUB/z4nfboy/2Kn9mv18WFhrnMHuCyNtos/bZJ3cZ8slaZJ0fxRtvqljUS87vxAPkefvw5IoAsOQ+bGc/bqy/2Kn9mv18H26cv9ip/Zr9fF22Oq0QGJKtaX1jL3T70Wk4pNqNm4MwgMM69hKuB1o29pT/AFfCl9urL/Yqf2a/Xxz7deX+xU/s1+vjQWes0yGmVjIWPzbIyQ5iuXzsEvIq7w8AY2+WC3Za/vxo2Z5WzzVFGJacJPSbikRJAQq07o+lj7RuT8e7F49Jl+00e8AnTcNp1WVWOoarfKuO3zxHHQjQj++qfcyfUw1UtAdHaGCNI1QvHL68vV1E0VbGKWGe1TEdIDIkKx6w3NwSLW71xmUkynJioIv9kLhbi4XdNp4c7dmNU+0jQ/jqn9dPqY6vQlQ3vvak941Lx/cxLK9FmMnTTZEFIvQXlTS5hv7dSBGJPZqcaFHn6x92DG6ZBkUFFEIaeMIg495J7yTxJwYUtNc1al4KVa45juDC6EY5juDAhZf/AOoD/V8X/wAhf8r4/P8Aj9BdPyE5fGbcp1v4dV8fn0Y7/wCnfs96hPFHsfRijp6urzBoPSA2ldyXHUYqeKny+OJEfRyrVcECVQeCohaaOZU4kIL2Kk+X62LyDP4aPK8q9IpIqiNzKCXUMYwr8Surhfj+7i2DOM9pizoaaWncUmhQqBHQ9UeN/wDpwua9UEmd9tNkLLdkdnRXTSxGQpu4XkuF1at12e/F3SbGUYpaWpqswNOalWKruCwGg2PWU+XPvxa7AbP1NHPWzVMLxRpTSqXcWUluVj2+7Eirzmmpsqyv0mhSqJjkKa2KhNLLfs43uP1caVa73Phh2yjYqEsTbBuuZx5bvAwks6yKOG7IJ1W8AD24g7a7LnLqoU+surKro+m2pX4cr9hvh+2QzkVElbnNYwgRI1poyqkiPXw6o7SOr+tiBtrTwVOWUtRSzmcUbineRlKsVe2i4buOn9bA20VBUDXZZHqhUe2WwD5fPTx7wvFOQok02KsSFKkX7Ab+OJq9HsCPXCetaOKjeNS+51Ft6t72U8OJt24es1r0qc0nyqoawYwzU7fi5YlR2A8wP83fiBntDJOM+ihRnkaan0qouT1UbGXxNQgBxjAY9SEJCz/Y6OKCOrpKtamnaQRMwXSY3bldb/1wxZZzsVltJM1PPmzJIltS+jFrahqXip7iMSafLZaDJ5Y6pDHJU1UW7ja17IULNbs5fRhp24qa8Vkq0+UwVEdl0yvT62bqrfrX42PD3Ysa7y4NvYY44DZCy2TZ1PQJK9ZiQtTuFBWwZbXV736vlj3y7ZMS0tPU70gz1a0ukKCFDfKvfreWGjZ/MvQsllaWlimIrtDRTLdVbTx4d4Itiw+yy1VDl8q08UA+ykY0RCy8Dz88XNeoJGk59yFl+0uVikqpqYMW3TldRFr27bYrcMnSP/rSs/4x/wCnC3h+iSWAnZSt2/8ATz/otT/xh/kXGs4yn/0+RkUk7EcGmsPHSq3xq+PO2v8AfcpRgwYMLoXMGO4MCEYMGDAhGDBgwIVPtPkcddTSU0vquOY5qw4qw8jjAM06KcyicqkImW/B0ZQCPJjcYMGGaFpfRwaheUuwWbsiRtTSlI76FMikJf1rDXwvj7fYfOSsaGCbTGbxrvVtGfyev1fdgwYY+PfsPBEKXX7M5/Om7mWpkT2WmUg+Y19bEGbYLN3RI3ppWSO4RWkUhA3Ow18MGDEC3vGQHgiF3+wecbrcejy7rVr0bxdJbvtq54Idg84RGjWnlVHILoJFCsV5XGvrYMGD/IVNh4KsL6n2Gzl5BO8EzScCHMilgR6vHXfhiTDstnyM7otQrSEF2EwBcqLAk6+twwYMBtzzmB4IhRq3YbOZ2DzQTSMOTPKrEeWp8T/sDtF31f7cfXwYMQbc76R4KYVe+w2clGjMExRn3jKZFIZ/aI18/HHYths5VFjWCYKr7xVEigK/tAa+B8cGDFv8hU2HgoheVV0e5tIxkkpZGdjcszoST3k6se2WdFOZSuFeAQr2vIy2A8lJJwYMR/kKsQIVoW/bK5DHQU0dNHxCDix5szcWY+ZxdYMGOeSSZKEYMGDAhGDBgwIX/9k=",
        title: "New Environment English Secondary School",
        subtitle: "Grade 1-10",
        period: "Graduated: 2016",
        details: ["Fully Funded with On-School Residence, President SQC, School First", "Secured First Position(literally) in Slow Cycling Competetion"
        ],
      },
    ],
    Experience: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Florida_State_University_seal.svg",
        title: "Florida State University, Tallahassee FL, USA",
        subtitle: "Graduate Assistant ",
        period: "2025 Jan - Present",
        details: ["Teaching Assistant at CS Department and Researcher at ML CV Group", "Holding Office Hours for Students and Working on Interesting Research Challenges"],
      },
      {
        logo: "data:image/jpeg;base64,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",
        title: "Katmatic Solutions Private Limited, Kathmandu, Nepal",
        subtitle: "R&D Engineer (AI, IOT FullStack) | Full-Time Role",
        period: "2023 May -2024 Dec",
        details: ["Built core functionalities and integration mechanisms for  a Wireless Weapon Tracking System for UN Base Headquarters", 
          "Helped Build a Radio Frequency enabled Student Tracking System, Used RSSI strengths, log-timestamps, and numerous features to build a proprietary Machine Learning model that identified student going in and going out Patterns based on Hopeland RF-antennas",
          "Managed, Maintained and Deployed pods on Azure Kubernetes, and oversaw System Deployment on Private infra of UN base",
          "Worked with mqtt, eventhub, and setup proper routes on apigateway for microservice implementation. also deployed the system for local debugging on docker.worked with python and py packages for complex mathematical and AI models simulaton and development.", 
          "Solo Built a Multi-Tier Generic ETL Engine with Fluid templating for Ultrafast MultiSchema MultiVendor Enterprise Data Integrations",
          "Regularly contributed to strategic Startup decisions, hiring Interview, architecture design and helped close clients over NRs. 4M",
          "Was offered a 12% equity in the company for contributions across robustness of microservices, product range expansion and strategic initiatives"],
      },
      {
        logo: "data:image/jpeg;base64,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",
        title: "Katmatic Solutions Private Limited, Kathmandu, Nepal",
        subtitle: "R&D Intern (AI, IOT) | Full-Time Role",
        period: "2023 Jan -2023 May",
        details: ["Solo Built a Kiosk Based Visitor Management System on Raspberry Pi, using RFID and modbus protocol on top of Avalonia. Utilized the backbone of existing microservices for building an integrated solution.",
          "Built a feature that performed Data querying, pre-processing and Analysis on existing inventory data for the Inventory Management System Product lineup and utilized langchain to generate explainable reports of missing inventories, lowstock and expected orders for Stakeholders"
        ],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrn4MwotHet5UgoXAGQuFdz25AeN9a7r4Uog&s",
        title: "Fusemachines, Kathmandu, Nepal",
        subtitle: "Fuse AI Scholar | Part Time Fellowship",
        period: "2023 Jan -2023 May",
        details: ["Worked on automated essay scoring, rubric based grading using static features, BERT and LLMs. ahieved a near state of the art QWK metric by proposed approach.",
          "Built a plant disease detection system with CNN and LVQ navigating challenges caused by high contrast and variable brightness in images.",
          "Predicted Peak Pollution time at Kathmandu with Particulate Matter data analytics to predict season, and trend components with STL, also utilized SARIMA model for auto- regressive time-series prediction."
        ],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1x4uiASSALyoRI15lAVHebWNq7P7UtS_SA&s",
        title: "Hultprize, Pulchowk Campus, Nepal",
        subtitle: "Campus Director",
        period: "2023 Jan -2023 May",
        details: ["Ran a startup incubation programme at 14 different colleges, trained over 18k students and helped incubated over 200 tech based startups",
          "Received Mayoral endorsement for the programme, deliberated at the Office of the President, was covered in 200+ media articles, and 5+ televeision segments.",
          "Received Multiple international awards and nominations including the first and only Program of the Year from Nepal at a global stage."
        ],
      },
    ],
    Volunteering: [
      {
        logo: "https://via.placeholder.com/60",
        title: "Tribhuvan University, Pulchowk Campus ",
        subtitle: "Community Service",
        period: "2020-2023",
        details: ["Organized tech workshops and hackathons"],
      },
    ],
    Awards: [
      {
        logo: "https://via.placeholder.com/60",
        title: "Best Research Paper Award",
        subtitle: "IEEE Conference",
        period: "2023",
        details: ["Awarded for research excellence in AI"],
      },
    ],
    Scholarships: [
      {
        logo: "https://via.placeholder.com/60",
        title: "Graduate Assistantship",
        subtitle: "Florida State University",
        period: "2024-2026",
        details: ["Fully Funded with stipend"],
      },
    ],
    Publications: [
      {
        logo: "https://via.placeholder.com/60",
        title: "AI in Healthcare",
        subtitle: "Springer Journal of AI",
        period: "2023",
        details: ["Co-authored a paper on AI advancements in medicine"],
      },
    ],
  };

  const tabs = Object.keys(journeyData);

  const TabIcon = ({ tab }) => {
    const icons = {
      Education: "🎓",
      Experience: "💼",
      Volunteering: "🤝",
      Awards: "🏆",
      Scholarships: "🎖",
      Publications: "📄",
    };
    return <span className="text-2xl" title={tab}>{icons[tab]}</span>;
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white  p-4 sm:p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">My Journey</h1>
          <p className="text-sm sm:text-base text-gray-500">A brief summary of my life and experiences so far</p>
        </div>

        {/* Responsive Icon Navigation */}
        <div className="flex justify-center border-b pb-4 overflow-x-auto">
          <div className="flex space-x-6 sm:space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center transition-all duration-200 ${
                  activeTab === tab
                    ? "border-b-2 border-gray-500 text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                title={tab}
              >
                <TabIcon tab={tab} />
                <span className="text-xs sm:text-sm font-medium hidden sm:block mt-1">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Tab Display (Mobile) */}
        <div className="sm:hidden text-center mt-2 mb-4">
          <span className="font-medium text-gray-700">{activeTab}</span>
        </div>

        {/* Content */}
        <div className="mt-6 overflow-auto">
          {journeyData[activeTab] && journeyData[activeTab].length > 0 ? (
            journeyData[activeTab].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row items-start p-3 sm:p-4 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition duration-150 mb-4"
              >
                <img 
                  src={item.logo} 
                  alt="" 
                  className="w-12 h-12 rounded-full object-cover mb-3 sm:mb-0 sm:mr-4" 
                />
                <div>
                  <h3 className="font-medium text-gray-800 text-base sm:text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {item.subtitle} {item.period && `| ${item.period}`}
                  </p>
                  {item.details && item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-xs sm:text-sm mt-1">• {detail}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 italic">
              No entries found for this section.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
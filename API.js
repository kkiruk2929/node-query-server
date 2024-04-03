const http = require('http'); // http 모듈
const express = require('express'); // express 모듈
const { default: axios } = require('axios'); // axios 모듈

const PORT = 5100; // 서버 포트 5100

// 메인 실행 함수
async function main() {
  const app = express(); // express 모듈 사용
  const httpApp = http.createServer(app); // 서버 객체 만들기

  // 네이버 API 호출해서 불러오기
  app.get('/blog', async (req, res) => {
    // 네이버 API 정보
    const { data } = await axios.get(
      'https://m.blog.naver.com/api/blogs/loviscus4/post-list?categoryNo=1&itemCount=20&page=1&userId=',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'ko,en-US;q=0.9,en;q=0.8,ko-KR;q=0.7',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'NNB=JMM64FV3XJOGI; nx_ssl=2; _ga=GA1.2.2142990569.1690119577; _ga_TSE3G32LNF=GS1.2.1690119577.1.1.1690120718.0.0.0; page_uid=iK6KtlprvhGssPgQUXlsssssteo-222071; BA_DEVICE=59c7d473-ea82-4d44-a23e-48f19cc0e81b; JSESSIONID=7419BB9AEBD1300B981E4247CF904B3A.jvm1',
          Referer: 'https://m.blog.naver.com/loviscus4?categoryNo=1',
          'Referrer-Policy': 'unsafe-url',
        },
      }
    );
    res.json(data); // json으로 데이터 받아오기
  });

  httpApp.listen(PORT, '0.0.0.0', () => {
    console.log(`listen port ${PORT}`); // 서버 포트 5100
  });
}
main();

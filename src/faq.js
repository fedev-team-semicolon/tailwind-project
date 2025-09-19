const faqSec = document.getElementById('faqSec');

if (faqSec) {
  const faqData = [
    {
      question: '미터기 요금을 중복으로 결제하였습니다 (앱+현장)',
      answer: `
        <p>앱과 현장에서 중복으로 요금이 결제된 경우, 다음과 같이 확인해 주세요.</p>
        <br/>
        <ol>
          <li>앱 결제 내역과 현장 결제 영수증을 확인합니다.</li>
          <li>가족 또는 지인이 동일한 카드를 사용하지 않았는지 점검합니다.</li>
          <li>중복 결제가 확인되면 결제 내역 캡처 후 고객센터에 문의합니다.</li>
        </ol>
        <br/>
        <p>문의 링크: <b>[고객지원 > 여정 및 요금 > 내 요금 및 수수료 검토 > 미터기 요금 중복 결제]</b></p>
      `,
    },
    {
      question: '미터기 요금 외에 다른 요금이 결제 됐습니다. (통행료, 가승인 등)',
      answer: `
        <p>미터기 요금 외에 다른 요금이 결제된 경우, 아래 사항을 확인해 주세요.</p>
        <br/>
        <ol>
          <li>통행료, 주차료, 가승인 요금 등이 포함되었는지 확인</li>
          <li>결제 영수증에서 항목별 금액을 비교</li>
          <li>이상금액 발생 시 캡처 후 고객센터 문의</li>
        </ol>
        <br/>
        <p>고객센터에서 정확한 요금 내역 확인 후 환불 또는 조정 안내를 받을 수 있습니다.</p>
      `,
    },
    {
      question: '분실물과 관련해 기사에게 연락하기',
      answer: `
              <p>비슷한 금액의 요금이 중복 청구 된 경우 아래와 같이 생각하실 수 있습니다.</p>
              <br/>
              <ol>
                <li>가족 또는 지인이 동일한 카드를 등록하여 사용하지 않았는지 확인해보세요.</li>
                <li>우연히 같은 요금의 다른 차량 서비스를 이용하지 않았는지 확인해보는 것이 좋습니다.</li>
                <li>어떠한 이유로 잘못 청구된 여정 요금이 변경된 경우가 없는지 확인해 보세요. 요금이 변경되면 업데이트 된 영수증이 발급됩니다.</li>
              </ol>
              <br/>
              <p>앱 결제 차량에서 실수로 현장에서 요금을 지불하여 중복 결제가 된 경우 결제된 카드 내역 또는 영수증 캡처하여 아래 링크를 통해 알려주세요.</p>
              <br/>
              <b>[고객지원 > 여정 및 요금 > 내 요금 및 수수료 검토 > 미터기 요금을 중복으로 결제하였습니다]</b>
            `,
    },
    {
      question: '택시가 잡혀 기다렸으나 저와는 반대방향으로 이동했어요.',
      answer: `
        <p>호출하신 택시가 고객님 위치와 이동 경로를 잘못 인식하여 반대 방향으로 이동한 것으로 확인됩니다.</p>
        <br/>
        <ol>
          <li>앱 내 위치 확인 기능과 예상 경로 안내를 확인</li>
          <li>다음 호출 시 위치 재확인</li>
          <li>문제가 반복되면 고객센터로 문의</li>
        </ol>
        <br/>
        <p>향후 유사 사례 방지를 위해 기사 안내 및 시스템 개선을 진행 중입니다.</p>
      `,
    },
    {
      question: '프로모션 코드가 적용되지 않았습니다.',
      answer: `
        <p>입력하신 프로모션 코드가 결제 과정에서 적용되지 않은 경우, 아래 사항을 확인하세요.</p>
        <br/>
        <ol>
          <li>코드 유효기간 및 사용 조건 확인</li>
          <li>결제 과정에서 올바르게 입력되었는지 확인</li>
          <li>문제가 계속되면 고객센터 문의</li>
        </ol>
        <br/>
        <p>적용 가능 여부 확인 후 필요 시 환불 또는 재적용 절차를 안내드립니다.</p>
      `,
    },
  ];

  let html = '';
  faqData.forEach((faq) => {
    html += `
            <details class="group border-b border-borderTransparent">
            <summary class="flex items-center gap-2 px-5 py-4 font-semibold text-base leading-6 cursor-pointer marker:content-[''] 
                            after:block after:shrink-0 after:w-6 after:h-6 after:ms-auto 
                            after:bg-[url('/images/ico_more_blue.svg')] 
                            after:bg-[length:100%_auto] after:bg-no-repeat after:bg-top 
                            after:text-[#0077cc] group-open:after:bg-[position:top_-24px_center]">
              ${faq.question}
            </summary>
            <div class="answer-editor p-6 border-borderTransparent] 
                        after:block after:h-1 after:border-b after:border-contentTertiary">
              ${faq.answer}
            </div>
          </details>
  
        `;
  });

  faqSec.innerHTML = `
    <div class="inner">
      <h2 class="mb-9 font-bold text-[1.3125rem] leading-[1.4] tablet:text-[1.75rem] desktop:text-[2.375rem]">자주 하는 질문</h2>
      <div id="faqArea" class="break-keep-all"></div>
    </div>
  `;

  const faqList = document.getElementById('faqArea');

  faqList.innerHTML = html;
}


import type { Unit } from '../types';

export const grammarData: Unit[] = [
  // Unit 1
  {
    unitNumber: 1,
    title: 'My New School',
    topics: [
      {
        id: 'unit-1-present-simple',
        title: 'Thì Hiện tại đơn',
        content: [
          { type: 'paragraph', data: 'Thì Hiện tại đơn là thì thể hiện những hành động hoặc sự việc xảy ra thường xuyên hoặc cố định, không đổi.' },
          { type: 'structure', data: ['Câu khẳng định: S + V(s/es)', 'Câu phủ định: S + don’t/doesn’t + V(bare)', 'Câu hỏi: Do/Does + S + V(bare)?'] },
          { type: 'note', data: 'Nếu chủ ngữ là số ít (she/he/it/danh từ số ít/danh từ không đếm được), thêm “s/es” vào động từ trong câu khẳng định và dùng “does” cho câu phủ định/câu hỏi.<br/>Nếu chủ ngữ là số nhiều (I/you/we/they/danh từ số nhiều), giữ nguyên động từ và dùng “do”.' },
          { type: 'paragraph', data: 'Thì Hiện tại đơn được sử dụng để diễn tả những sự việc, hành động luôn xảy ra thường xuyên, lặp đi lặp lại, diễn tả một chân lý, sự thật hiển nhiên, hoặc các sự việc cố định như lịch trình tàu, xe, …vv.' },
          { type: 'example', data: { en: 'Duy rides his bicycle to school every day.', vi: 'Duy đạp xe đến trường mỗi ngày.' } },
          { type: 'example', data: { en: 'My biology class starts at 7 am in the morning.', vi: 'Tiết Sinh học của tôi bắt đầu lúc 7 giờ sáng.' } },
        ],
        exercises: [
          { question: 'She ___ (go) to school by bus every day.', options: ['go', 'goes', 'is going', 'went'], correctAnswer: 'goes', explanation: 'Với chủ ngữ "She" (số ít), chúng ta dùng V(s/es) trong thì Hiện tại đơn.' },
          { question: 'They ___ (not play) football on Mondays.', options: ['don\'t play', 'doesn\'t play', 'not play', 'is not playing'], correctAnswer: 'don\'t play', explanation: 'Với chủ ngữ "They" (số nhiều), chúng ta dùng "don\'t" + V(bare) cho câu phủ định.' },
          { question: '___ you ___ (like) pop music?', options: ['Do / like', 'Does / like', 'Are / liking', 'Do / likes'], correctAnswer: 'Do / like', explanation: 'Với chủ ngữ "you", chúng ta dùng "Do" cho câu hỏi trong thì Hiện tại đơn.' },
          { question: 'The sun ___ (rise) in the East.', options: ['rise', 'is rising', 'rises', 'rose'], correctAnswer: 'rises', explanation: 'Đây là một sự thật hiển nhiên, vì vậy chúng ta dùng thì Hiện tại đơn. "The sun" là chủ ngữ số ít.' },
        ]
      },
      {
        id: 'unit-1-adverbs-of-frequency',
        title: 'Trạng từ chỉ tần suất',
        content: [
            { type: 'paragraph', data: 'Trạng từ chỉ tần suất được sử dụng để thể hiện mức độ thường xuyên xảy ra của một hành động hay sự việc nào đó.' },
            { type: 'list', data: ['always (luôn luôn)', 'usually (thường xuyên)', 'often (thường xuyên)', 'sometimes (thỉnh thoảng)', 'rarely (hiếm khi)', 'never (không bao giờ)'] },
            { type: 'paragraph', data: 'Trạng từ chỉ tần suất thường xuất hiện trong các câu sử dụng Thì Hiện tại đơn. Thông thường, đặt các trạng từ chỉ tần suất <b>trước động từ thường</b> và <b>sau động từ "to be"</b>.' },
            { type: 'example', data: { en: 'We always have math class on Mondays.', vi: 'Chúng tôi luôn học toán vào các ngày thứ Hai.' } },
            { type: 'example', data: { en: 'Duy and Mai rarely have lunch together at school.', vi: 'Duy và Mai hiếm khi dùng bữa trưa cùng nhau ở trường.' } },
        ],
        exercises: [
            { question: 'I ___ finish my homework right after school.', options: ['often', 'am often', 'often am', 'are often'], correctAnswer: 'often', explanation: 'Trạng từ chỉ tần suất (often) đứng trước động từ thường (finish).' },
            { question: 'He is ___ late for class.', options: ['never', 'nevers', 'is never', 'never is'], correctAnswer: 'never', explanation: 'Trạng từ chỉ tần suất (never) đứng sau động từ "to be" (is).' },
            { question: 'Do you ___ go to the cinema on weekends?', options: ['usually', 'are usually', 'usually are', 'do usually'], correctAnswer: 'usually', explanation: 'Trong câu hỏi, trạng từ tần suất đứng giữa trợ động từ và động từ chính.' },
        ]
      }
    ],
  },
  // Unit 2
  {
      unitNumber: 2,
      title: 'My House',
      topics: [
          {
              id: 'unit-2-possessive-case',
              title: 'Sở hữu cách',
              content: [
                  { type: 'paragraph', data: 'Sở hữu cách thể hiện quyền sở hữu của danh từ đứng trước nó đối với sự vật nào đó. Hình thức của sở hữu cách là ‘s, viết cuối danh từ có quyền sở hữu.' },
                  { type: 'note', data: 'Dạng sở hữu cách ‘s đứng cuối danh từ riêng hoặc danh từ số ít. Danh từ có sở hữu cách có thể có danh từ khác theo sau hoặc không.' },
                  { type: 'example', data: { en: 'Phong\'s room has a bed, a desk, a fan, and a wardrobe.', vi: 'Phòng của Phong có một chiếc giường, bàn học, cái quạt và tủ quần áo.' } },
                  { type: 'example', data: { en: 'My flat is smaller than my friend’s. (= my friend’s flat.)', vi: 'Căn hộ của tôi nhỏ hơn của bạn tôi. (= căn hộ của bạn tôi.)' } },
              ],
              exercises: [
                  { question: 'This is ___ book.', options: ['Mary\'s', 'Marys', 'Marys\'', 'the Mary'], correctAnswer: 'Mary\'s', explanation: 'Để chỉ sự sở hữu của "Mary", chúng ta dùng sở hữu cách \'s.' },
                  { question: 'Where is the ___ car?', options: ['teacher\'s', 'teachers', 'teacher of', 'teachers\'s'], correctAnswer: 'teacher\'s', explanation: 'Để chỉ chiếc xe của một người giáo viên (số ít), chúng ta dùng "teacher\'s".' },
                  { question: 'The ___ toys are all over the floor.', options: ['children\'s', 'childrens\'', 'childs\'', 'childrens'], correctAnswer: 'children\'s', explanation: '"Children" là danh từ số nhiều bất quy tắc, sở hữu cách của nó là "children\'s".' },
              ]
          },
          {
              id: 'unit-2-prepositions-of-place',
              title: 'Giới từ chỉ vị trí',
              content: [
                  { type: 'paragraph', data: 'Giới từ chỉ vị trí miêu tả địa điểm của người hoặc vật nào đó so với người hoặc vật khác.' },
                  { type: 'list', data: ['in (trong)', 'on (trên)', 'behind (đằng sau)', 'under (dưới)', 'next to (bên cạnh)', 'in front of (trước)', 'between (ở giữa)'] },
                  { type: 'example', data: { en: 'The book is on the armchair.', vi: 'Cuốn sách đang trên cái ghế bành.' } },
                  { type: 'example', data: { en: 'The cat is under the bed.', vi: 'Con mèo đang nằm dưới giường.' } },
                  { type: 'example', data: { en: 'She is standing in front of the lamp.', vi: 'Cô ấy đang đứng trước cái đèn.' } },
              ],
              exercises: [
                  { question: 'The keys are ___ the cushions of the sofa.', options: ['on', 'in', 'between', 'under'], correctAnswer: 'between', explanation: '"Between" được sử dụng để chỉ vị trí ở giữa hai hoặc nhiều vật.' },
                  { question: 'My school is ___ the post office.', options: ['next to', 'under', 'on', 'in'], correctAnswer: 'next to', explanation: '"Next to" có nghĩa là "bên cạnh", dùng để chỉ vị trí kề nhau.' },
                  { question: 'There is a picture ___ the wall.', options: ['on', 'in', 'at', 'under'], correctAnswer: 'on', explanation: 'Chúng ta dùng "on" để chỉ một vật gì đó ở trên một bề mặt, như là "trên tường".' },
              ]
          }
      ]
  },
  // Unit 3
  {
      unitNumber: 3,
      title: 'My Friends',
      topics: [
          {
              id: 'unit-3-present-continuous',
              title: 'Thì Hiện tại tiếp diễn',
              content: [
                  { type: 'paragraph', data: 'Thì Hiện tại tiếp diễn là thì thể hiện những hành động, sự việc đang xảy ra trong thời điểm hiện tại.' },
                  { type: 'structure', data: ['Câu khẳng định: S + is/am/are + V-ing', 'Câu phủ định: S + isn’t/aren’t/am not + V-ing', 'Câu hỏi: Is/Am/Are + S + V-ing?'] },
                  { type: 'paragraph', data: 'Thì Hiện tại tiếp diễn được sử dụng để diễn tả những sự việc, hành động đang xảy ra tại thời điểm nói. Dấu hiệu nhận biết: now, at present, at the moment, look!, listen!...' },
                  { type: 'example', data: { en: 'Look, Minh is making a cake!', vi: 'Nhìn kìa, Minh đang làm bánh!' } },
                  { type: 'example', data: { en: 'I am learning to swim these days.', vi: 'Dạo này tôi đang học bơi.' } },
              ],
              exercises: [
                  { question: 'What ___ you ___ (do) now?', options: ['are / doing', 'do / do', 'is / doing', 'are / do'], correctAnswer: 'are / doing', explanation: 'Trong thì Hiện tại tiếp diễn, câu hỏi với chủ ngữ "you" dùng "are...doing".' },
                  { question: 'My sister ___ (watch) TV at the moment.', options: ['watches', 'is watching', 'are watching', 'watch'], correctAnswer: 'is watching', explanation: '"At the moment" là dấu hiệu của thì Hiện tại tiếp diễn. Chủ ngữ "My sister" đi với "is".' },
                  { question: 'They ___ (not play) chess right now. They are reading books.', options: ['don\'t play', 'are playing', 'aren\'t playing', 'doesn\'t play'], correctAnswer: 'aren\'t playing', explanation: 'Câu phủ định của thì Hiện tại tiếp diễn với chủ ngữ "They" là "aren\'t playing".' },
              ]
          }
      ]
  },
  // Unit 4
  {
    unitNumber: 4,
    title: 'My Neighbourhood',
    topics: [
        {
            id: 'unit-4-comparatives',
            title: 'Cấp so sánh hơn của tính từ',
            content: [
                { type: 'paragraph', data: 'Cấp so sánh hơn của tính từ là cách để so sánh hai người hoặc sự vật, sự việc nào đó.' },
                { type: 'structure', data: ['Tính từ ngắn: adj-er/ier + than', 'Tính từ dài: more + adj + than'] },
                { type: 'paragraph', data: 'Có các tính từ đặc biệt trong so sánh hơn không tuân thủ hai cấu trúc trên:' },
                { type: 'table', data: {
                    headers: ['Tính từ', 'Cấp so sánh hơn'],
                    rows: [
                        ['good', 'better than'],
                        ['bad', 'worse than'],
                        ['far', 'farther/further than'],
                        ['little', 'less than'],
                        ['many/much', 'more than'],
                    ]
                }},
                { type: 'example', data: { en: 'Life in the city is more expensive than life in the countryside.', vi: 'Cuộc sống ở thành phố đắt đỏ hơn so với cuộc sống ở nông thôn.' } },
                { type: 'example', data: { en: 'Walking is better for our health than taking the bus.', vi: 'Đi bộ tốt cho sức khỏe của chúng ta hơn là đi xe buýt.' } },
            ],
            exercises: [
                { question: 'This book is ___ than that one.', options: ['more interesting', 'interesting', 'interestinger', 'the most interesting'], correctAnswer: 'more interesting', explanation: '"Interesting" là tính từ dài, vì vậy so sánh hơn của nó là "more interesting".' },
                { question: 'My house is ___ than yours.', options: ['big', 'biger', 'bigger', 'more big'], correctAnswer: 'bigger', explanation: '"Big" là tính từ ngắn, ta gấp đôi phụ âm cuối và thêm -er.' },
                { question: 'His performance was ___ than mine.', options: ['gooder', 'more good', 'better', 'the best'], correctAnswer: 'better', explanation: '"Good" là tính từ bất quy tắc, dạng so sánh hơn là "better".' },
            ]
        }
    ]
  },
  // Unit 5
  {
      unitNumber: 5,
      title: 'Natural Wonders of Viet Nam',
      topics: [
          {
              id: 'unit-5-countable-uncountable-nouns',
              title: 'Danh từ đếm được và không đếm được',
              content: [
                  { type: 'paragraph', data: '<b>Danh từ đếm được</b> là những danh từ chỉ người và vật mà có thể đếm được bằng số đếm. Chúng có dạng số ít và số nhiều.' },
                  { type: 'note', data: '→ Sử dụng <b>some</b> (một vài), <b>many</b> (nhiều), <b>a few</b> (một ít) để thể hiện số lượng đối với các danh từ đếm được.' },
                  { type: 'paragraph', data: '<b>Danh từ không đếm được</b> là những danh từ chỉ vật mà không thể đếm được bằng số đếm. Chúng thường không có dạng số nhiều.' },
                  { type: 'note', data: '→ Sử dụng <b>some</b> (một chút), <b>much</b> (nhiều), <b>a little</b> (một ít) để thể hiện lượng đối với các danh từ không đếm được.' },
                   { type: 'example', data: { en: 'I’m packing a few pills for our trip to the mountains tomorrow.', vi: 'Tôi đang chuẩn bị một vài viên thuốc cho chuyến dã ngoại trên núi của chúng ta vào ngày mai.' } },
                  { type: 'example', data: { en: 'Do you have some suncream?', vi: 'Bạn có kem chống nắng không?' } },
              ],
              exercises: [
                  { question: 'How ___ water do you drink every day?', options: ['many', 'much', 'a few', 'some'], correctAnswer: 'much', explanation: '"Water" là danh từ không đếm được, vì vậy chúng ta dùng "much" để hỏi về số lượng.' },
                  { question: 'There are ___ books on the table.', options: ['a little', 'much', 'any', 'a few'], correctAnswer: 'a few', explanation: '"Books" là danh từ đếm được số nhiều. "A few" có nghĩa là "một vài".' },
                  { question: 'We need ___ information about the project.', options: ['some', 'many', 'a few', 'an'], correctAnswer: 'some', explanation: '"Information" là danh từ không đếm được. "Some" có thể dùng với cả danh từ đếm được và không đếm được.' },
              ]
          },
          {
              id: 'unit-5-must-mustnt',
              title: 'Động từ khiếm khuyết: must - mustn’t',
              content: [
                  { type: 'paragraph', data: '<b>Must</b> được sử dụng để thể hiện sự cần thiết hay vô cùng quan trọng của một hành động nào đó (bắt buộc).' },
                  { type: 'paragraph', data: '<b>Mustn’t</b> được sử dụng để nói về hành động bị cấm hay không được phép.' },
                  { type: 'note', data: 'Must - mustn’t là động từ khiếm khuyết, phải được theo sau bởi một động từ thường ở dạng nguyên thể (bare infinitive).' },
                  { type: 'example', data: { en: 'You must be careful when you go swimming at the beach.', vi: 'Bạn phải cẩn thận khi bạn đi bơi ở biển.' } },
                  { type: 'example', data: { en: 'We mustn’t litter in this national park.', vi: 'Chúng ta không được phép xả rác bừa bãi ở khu vực công viên quốc gia này.' } },
              ],
              exercises: [
                  { question: 'You ___ touch that wire. It\'s dangerous.', options: ['must', 'mustn\'t', 'should', 'don\'t have to'], correctAnswer: 'mustn\'t', explanation: '"Mustn\'t" được dùng để diễn tả một sự cấm đoán, một việc không được phép làm vì nó nguy hiểm.' },
                  { question: 'Students ___ wear uniforms to school.', options: ['must', 'mustn\'t', 'shouldn\'t', 'can'], correctAnswer: 'must', explanation: '"Must" diễn tả một sự bắt buộc, một quy định phải tuân theo.' },
                  { question: 'You ___ forget to do your homework.', options: ['must', 'mustn\'t', 'should', 'might'], correctAnswer: 'mustn\'t', explanation: 'Đây là một lời nhắc nhở mạnh mẽ về việc không được phép quên.' },
              ]
          }
      ]
  },
  // Unit 6
  {
    unitNumber: 6,
    title: 'Our Tet Holiday',
    topics: [
      {
        id: 'unit-6-should-shouldnt',
        title: 'Động từ khiếm khuyết: should - shouldn’t',
        content: [
          { type: 'paragraph', data: '<b>Should - shouldn’t</b> được sử dụng để diễn tả lời khuyên.' },
          { type: 'list', data: ['<b>Should</b> được sử dụng để nói về những hành động tốt nên làm.', '<b>Shouldn’t</b> được sử dụng để nói về những hành động không tốt và không nên làm.'] },
          { type: 'note', data: 'Should - shouldn’t là động từ khiếm khuyết, theo sau là động từ nguyên thể.' },
          { type: 'example', data: { en: 'We should plant more trees.', vi: 'Chúng ta nên trồng nhiều cây hơn.' } },
          { type: 'example', data: { en: 'Everyone shouldn’t break things during Tet.', vi: 'Mọi người không nên đập vỡ đồ đạc vào dịp Tết.' } },
        ],
        exercises: [
          { question: 'You look tired. You ___ go to bed early.', options: ['should', 'shouldn\'t', 'must', 'mustn\'t'], correctAnswer: 'should', explanation: 'Đây là một lời khuyên về việc nên làm để cải thiện sức khỏe.' },
          { question: 'Children ___ eat too much candy.', options: ['should', 'shouldn\'t', 'must', 'have to'], correctAnswer: 'shouldn\'t', explanation: 'Đây là lời khuyên về một việc không nên làm vì nó không tốt cho sức khỏe.' },
        ]
      },
      {
        id: 'unit-6-some-any',
        title: 'Some/any',
        content: [
          { type: 'paragraph', data: '<b>Some/any</b> được sử dụng để thể hiện số lượng.' },
          { type: 'list', data: ['<b>Some</b> được sử dụng với các danh từ đếm được số nhiều và danh từ không đếm được trong <b>câu khẳng định</b> và lời mời/đề nghị.', '<b>Any</b> được sử dụng với các danh từ đếm được số nhiều và danh từ không đếm được trong <b>câu phủ định và câu hỏi</b>.'] },
          { type: 'example', data: { en: 'My mother always decorates the house with some flowers for Tet.', vi: 'Mẹ tôi luôn trang hoàng nhà cửa với một vài loài hoa vào dịp Tết.' } },
          { type: 'example', data: { en: 'We don’t have any banh chung yet.', vi: 'Chúng tôi chưa có bánh chưng.' } },
          { type: 'example', data: { en: 'Did you get any new clothes for the New Year?', vi: 'Bạn đã mua quần áo mới cho năm mới chưa?' } },
        ],
        exercises: [
          { question: 'I don\'t have ___ money left.', options: ['some', 'any', 'a', 'many'], correctAnswer: 'any', explanation: 'Chúng ta dùng "any" trong câu phủ định.' },
          { question: 'Would you like ___ coffee?', options: ['some', 'any', 'much', 'a few'], correctAnswer: 'some', explanation: 'Chúng ta dùng "some" trong lời mời, mặc dù đây là câu hỏi.' },
          { question: 'Are there ___ apples in the fridge?', options: ['some', 'any', 'an', 'much'], correctAnswer: 'any', explanation: 'Chúng ta dùng "any" trong câu hỏi thông thường.' },
        ]
      }
    ]
  },
  // Unit 12
  {
    unitNumber: 12,
    title: 'Robots',
    topics: [
      {
        id: 'unit-12-superlatives',
        title: 'Cấp so sánh nhất của tính từ ngắn',
        content: [
          { type: 'paragraph', data: 'Cấp so sánh nhất của tính từ được sử dụng để so sánh từ 3 người hoặc vật trở lên, nhấn mạnh tính chất nào đó của 1 người hay vật là nhất so với những người hay vật còn lại trong nhóm.' },
          { type: 'structure', data: ['Tính từ ngắn: the adj-est/iest'] },
          { type: 'paragraph', data: 'Có các tính từ đặc biệt trong so sánh nhất không tuân thủ cấu trúc trên:' },
          { type: 'table', data: {
              headers: ['Tính từ', 'Cấp so sánh nhất'],
              rows: [
                  ['good', 'the best'],
                  ['bad', 'the worst'],
                  ['far', 'the farthest/furthest'],
                  ['little', 'the least'],
                  ['many/much', 'the most'],
              ]
          }},
          { type: 'example', data: { en: 'My future robot will be the tallest in the world!', vi: 'Người máy tương lai của tôi sẽ là người máy cao nhất thế giới!' } },
          { type: 'example', data: { en: 'This is the smartest robot ever! It can work as a doctor and cure diseases.', vi: 'Đây là người máy thông minh nhất từng thấy! Nó có thể hành nghề bác sĩ và chữa bệnh.' } },
        ],
        exercises: [
          { question: 'Mount Everest is ___ mountain in the world.', options: ['high', 'higher than', 'the highest', 'the most high'], correctAnswer: 'the highest', explanation: '"High" là tính từ ngắn. Dạng so sánh nhất là "the highest".' },
          { question: 'Who is ___ student in your class?', options: ['the best', 'better than', 'good', 'the goodest'], correctAnswer: 'the best', explanation: '"Good" là tính từ bất quy tắc. Dạng so sánh nhất là "the best".' },
          { question: 'This is ___ book I have ever read.', options: ['the baddest', 'bad', 'worse than', 'the worst'], correctAnswer: 'the worst', explanation: '"Bad" là tính từ bất quy tắc. Dạng so sánh nhất là "the worst".' },
        ]
      }
    ]
  },
];

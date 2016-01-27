(function () {
  var terms = {
    damages: {
      title: 'Damages',
      whatItMeansText: 'The money you (or your insurance company) would have to pay a client should they successfully sue you or win arbitration due to a professional error on your part.',
      howItWorksText: 'Allison provided advice to her client that turned out to be inaccurate. In turn, her client sued her for damages since the advice adversely affected their business. The court ruled that Allison owed the client $5,000 in damages.',
      cartoonImgSrc: '<img src="images/freelancer_illustrations-15.svg"/>'
    },
    deductible: {
      title: 'Deductible',
      whatItMeansText: 'The dollar amount you are required to pay from your own pocket before your insurance company pays your lawyers, legal fees, court costs or damages to your client.',
      howItWorksText: 'Laurie was sued for copyright infringement. The plaintiff agreed to settle out of court for $10,000. Since Laurie’s insurance had a $1,000 deductible, that was all she was required to pay. Her insurance company paid the remaining $9,000.',
      cartoonImgSrc: '<img src="images/freelancer_illustrations-17.svg"/>'
    },
    errorsAndOmissions: {
      title: 'Errors & Omissions',
      whatItMeansText: 'A type of professional liability insurance that protects companies and individuals against claims made by clients for inadequate work or negligent actions.',
      howItWorksText: 'Paul’s market research firm advised his client on the positioning of a new product. When the product failed to sell, Paul’s client sued, claiming Paul was negligent by failing to include enough respondents in his focus groups.',
      cartoonImgSrc: '<img src="images/freelancer_illustrations-19.svg"/>'
    }
  };
    $(document).ready(function () {
    $('nav p').on('click', function () {
      $(this).addClass('is-selected');
      var selectedSection = $(this).attr('id');
      var selectedSectionData = terms[selectedSection];
      var htmlToRender = [
        '<h2>',
          selectedSectionData.title,
        '</h2>',
        '<h3>What It Means</h2>',
        '<p>',
          selectedSectionData.whatItMeansText, selectedSectionData.cartoonImgSrc,
        '</p>',
        '<button>How does it work?</button>'
      ].join('');
      $('.just-the-terms-content').html(htmlToRender);
    });
  });
})();
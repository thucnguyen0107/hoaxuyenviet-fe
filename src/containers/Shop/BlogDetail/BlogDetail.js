import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import axios from 'axios';
class BlogDetail extends React.Component {


	componentDidMount() {
		loadingScreen.hideLoading();
	}

	componentWillMount() {
		loadingScreen.showLoading();
		axios.get('/datatest/Blog.json').then((res) => {
			console.log(this.props.match.params.blog_id);

			console.log(res);
			this.setState({
				product: res,
			}, loadingScreen.hideLoading())
		}).catch((err) => {
			loadingScreen.hideLoading();
			console.error(err);
		})
	}

	render() {

		let styleCenter;
		styleCenter = {
			margin: '40px auto 0',
			width: '70%',
		}
		return (
			<>
				<div id="breadcrumb">
					<div className="container">
						<div className="row">
							<ul className="breadcrumb">
								<h2 className="page-title" style={{ fontFamily: 'Times New Roman' }}>Blog</h2>
								<li><a href="/"><i className="fa fa-home"></i></a></li>
								<li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Blog</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div id="content" className="single-blog" style={styleCenter}>
							<h2 className="page-title">Ý NGHĨA HOA HỒNG</h2>
							<div className="blog-img">
								<img src="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/image/cache/catalog/demo/blogs/6-835x455.jpg" alt="Nullam ullamcorper nisl quis" title="Nullam ullamcorper nisl quis" className="img-thumbnail" />
							</div>
							<p>Mỗi màu sắc hoa hồng lại mang đến một ý nghĩa biểu đạt khác nhau, vì vậy bạn hãy cùng Hoayeuthuong.com tìm hiểu xem bó hoa mình tặng mang thông điệp gì nhé:</p>
							<p>Hoa hồng đỏ: tượng trưng cho một tình yêu nồng cháy và lãng mạn. Hoa hồng đỏ đã có từ rất lâu đời, trải qua nhiều nền văn hóa - cả phương tây và phương đông.Nhưng ở bất kì đâu, nó cũng luôn là loài hoa được yêu thích nhất, và biểu tượng cho một thứ tình cảm vô cùng thiêng liêng: Tình yêu.</p>
							<p>Hoa hồng trắng: tượng trưng cho sự ngây thơ, duyên dáng và sự cảm thông. Hồng trắng không chỉ biểu tượng cho một tình yêu thuần khiết, cao thượng mà mặt khác, nó còn là loài hoa dành để bày tỏ lời xin lỗi đến người yêu nếu chẳng may bạn có mắc lỗi lầm.</p>
							<p>Hoa hồng vàng: Có lẽ đây là loài hoa làm người nhận khá đau đầu bởi ý nghĩa khá đa dạng của nó: Hoa hồng vàng không chỉ tượng trưng cho một tình yêu kiêu sa đầy rực rỡ, mà nó còn là loài hoa của tình bạn, thể hiện sự quan tâm và tiến triển trong mối quan hệ, chẳng hạn như: "anh quan tâm đến em" hoặc "hãy nhớ đến anh". Tặng một bó hồng vàng có thể là mừng ngày khởi đầu, và cả mừng ngày trở về. Đôi khi,hồng vàng lại là một lời bày tỏ sự ghen tuông, tình yêu giảm sút, và sự phản bội.
																	 Bên cạnh đó, hoa hồng vàng cũng là loài hoa lý tưởng để dành tặng mẹ và bà, bởi lẽ nó còn có ý nghĩa của sự biết ơn và tôn kính.</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default BlogDetail;
import React, { Component } from 'react'
import faqItems from '../../fixtures/faqs.json'

export class AccordeonItem extends Component {
    state = {
        activeItemID: null,
    }

    render() {
        const onItemClickHandler = (props) => {
            if (this.state.activeItemID === props.id) {
                this.setState({
                    activeItemID: null
                })
            } else {
                this.setState({
                    activeItemID: props.id
                })
            }
        }

        return (
            faqItems.map((item) => {
                const cls = ['item_wrapper']

                if (item.id === this.state.activeItemID) {
                    cls.push('item_active')
                }

                return (
                    <div className={cls.join(' ')} key={item.id}>
                        <div className='item' onClick={() => onItemClickHandler(item)}>
                            <h3>{item.header}</h3>
                            <div className='xButton '>+</div>
                        </div>
                        <div className="item_text">{item.body.map((pItem, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <p>{pItem}</p>
                                </React.Fragment>
                            )
                        })}</div>
                    </div>
                )

            })

        )
    }

}
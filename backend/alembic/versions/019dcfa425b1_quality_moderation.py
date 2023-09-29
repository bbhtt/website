"""quality_moderation

Revision ID: 019dcfa425b1
Revises: 554c998365fb
Create Date: 2023-09-20 17:07:21.777694

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '019dcfa425b1'
down_revision = '554c998365fb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('qualitymoderation',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('guideline_id', sa.String(), nullable=False),
    sa.Column('app_id', sa.String(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_by', sa.Integer(), nullable=True),
    sa.Column('passed', sa.Boolean(), nullable=False),
    sa.Column('comment', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['updated_by'], ['flathubuser.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_qualitymoderation_app_id'), 'qualitymoderation', ['app_id'], unique=False)
    op.create_index(op.f('ix_qualitymoderation_guideline_id'), 'qualitymoderation', ['guideline_id'], unique=False)
    op.create_index('qualitymoderation_unique', 'qualitymoderation', ['app_id', 'guideline_id'], unique=True)
    op.add_column('flathubuser', sa.Column('is_quality_moderator', sa.Boolean(), server_default=sa.text('false'), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('flathubuser', 'is_quality_moderator')
    op.drop_index('qualitymoderation_unique', table_name='qualitymoderation')
    op.drop_index(op.f('ix_qualitymoderation_guideline_id'), table_name='qualitymoderation')
    op.drop_index(op.f('ix_qualitymoderation_app_id'), table_name='qualitymoderation')
    op.drop_table('qualitymoderation')
    # ### end Alembic commands ###